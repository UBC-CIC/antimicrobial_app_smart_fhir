const Autoprefixer = require('autoprefixer');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const path = require('path');
const rtl = require('postcss-rtl');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const DuplicatePackageCheckerPlugin = require('@cerner/duplicate-package-checker-webpack-plugin');
const aggregateTranslations = require('terra-aggregate-translations');
const ThemeAggregator = require('../../scripts/aggregate-themes/theme-aggregator');
const getThemeWebpackPromise = require('./getThemeWebpackPromise');
const ThemePlugin = require('./postcss/ThemePlugin');
const getThemeConfig = require('./postcss/_getThemeConfig');

const webpackConfig = (options, env, argv) => {
  const { disableCSSCustomProperties } = env;
  const {
    rootPath,
    resolveModules,
    staticOptions,
    aggregatedLocales,
    themeFile,
    themeConfig,
  } = options;

  const production = argv.p;
  const fileNameStategy = production ? '[name]-[chunkhash]' : '[name]';
  const chunkFilename = argv['output-chunk-filename'] || fileNameStategy;
  const filename = argv['output-filename'] || fileNameStategy;
  const outputPath = argv['output-path'] || path.join(rootPath, 'build');
  const publicPath = argv['output-public-path'] || '';
  const sourceMap = env.generateLoaderSourceMaps || !production;


  const devConfig = {
    mode: 'development',
    entry: {
      raf: 'raf/polyfill',
      'core-js': 'core-js/stable',
      'regenerator-runtime': 'regenerator-runtime/runtime',
      ...themeFile && { theme: themeFile },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward', // needed to correctly resolve babel's config root in mono-repos
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !production, // only enable hot module reloading in development
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'global',
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                sourceMap,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // Add unique ident to prevent the loader from searching for a postcss.config file. See: https://github.com/postcss/postcss-loader#plugins
                ident: 'postcss',
                sourceMap,
                plugins: [
                  ThemePlugin(themeConfig),
                  rtl(),
                  Autoprefixer(),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap,
              },
            },
          ],
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.(png|svg|jpg|gif|otf|eot|ttf|svg|woff|woff2)$/,
          use: 'file-loader',
        }],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${filename}.css`,
        chunkFilename: `${chunkFilename}.css`,
        ignoreOrder: true,
      }),
      new PostCSSAssetsPlugin({
        test: /\.css$/,
        log: false,
        plugins: [
          PostCSSCustomProperties({
            preserve: !disableCSSCustomProperties,
            // If we have a theme file, use the webpack promise to webpack it.  This promise will resolve to
            // an object with themeable variables and values. This will then be used to update the end state CSS
            // so that they are populated with values if variables aren't supported (e.g. IE10). This dance is
            // necessary when code splitting to ensure the variables and values are applied across all code split
            // css files
            ...themeFile && { importFrom: [getThemeWebpackPromise(rootPath, themeFile, themeConfig)] },
          }),
        ],
      }),
      new DuplicatePackageCheckerPlugin({
        showHelp: false,
        alwaysEmitErrorsFor: [
          'react',
          'react-dom',
          'react-intl',
          'react-on-rails',
          'terra-application',
          'terra-breakpoints',
          'terra-disclosure-manager',
          'terra-navigation-prompt',
          'terra-theme-context',
        ],
      }),
      new webpack.DefinePlugin({
        CERNER_BUILD_TIMESTAMP: JSON.stringify(new Date(Date.now()).toISOString()),
        TERRA_AGGREGATED_LOCALES: JSON.stringify(aggregatedLocales),
        TERRA_THEME_CONFIG: JSON.stringify(themeConfig),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: resolveModules,
      mainFields: ['main'],
    },
    output: {
      filename: `${filename}.js`,
      chunkFilename: `${chunkFilename}.js`,
      path: outputPath,
      publicPath,
    },
    devServer: {
      ...staticOptions,
      host: '0.0.0.0',
      publicPath,
      stats: {
        colors: true,
        children: false,
      },
    },
    devtool: 'eval-source-map',
    resolveLoader: {
      modules: [path.resolve(path.join(rootPath, 'node_modules'))],
    },
    stats: { children: false },
  };

  if (!production) {
    return devConfig;
  }

  return merge.strategy({
    devtool: 'replace',
  })(devConfig, {
    mode: 'production',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'] }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap,
          terserOptions: {
            compress: {
              typeofs: false,
            },
          },
        }),
      ],
    },
  });
};

const defaultWebpackConfig = (env = {}, argv = {}) => {
  const {
/*
    disableAggregateTranslations,
*/
    disableHotReloading,
    disableAggregateThemes,
    themeConfig: envThemeConfig,
  } = env;

  const staticOptions = {
    ...disableHotReloading && {
      hot: false,
      inline: false,
    },
  };

  const processPath = process.cwd();
  /* Get the root path of a mono-repo process call */
  const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

  const resolveModules = [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'];

  /*let aggregatedLocales;
  if (!disableAggregateTranslations) {
    aggregatedLocales = aggregateTranslations({ baseDir: rootPath, ...env.aggregateOptions });
    resolveModules.unshift(path.resolve(rootPath, 'aggregated-translations'));
  }*/

  const defaultTheme = process.env.THEME; // Flexes root theme for theme visual regression testing.
  let themeConfig = {};
  if (defaultTheme) {
    themeConfig = { theme: defaultTheme };
  } else if (envThemeConfig) {
    themeConfig = envThemeConfig;
  } else {
    themeConfig = getThemeConfig();
  }
  let themeFile;
  if (!disableAggregateThemes) {
    // Set the default theme and disable scoped theme aggregation.
    themeFile = ThemeAggregator.aggregate(
      null, // Set the default theme via the config.
      {
        config: themeConfig,
        aggregateDefaultThemeAsScopedTheme: true,
      },
    );
  }

  const options = {
    rootPath,
    resolveModules,
    staticOptions,
/*
    aggregatedLocales,
*/
    themeFile,
    themeConfig,
  };

  return webpackConfig(options, env, argv);
};

module.exports = defaultWebpackConfig;
