import React from 'react';
import PropTypes from 'prop-types';
import { ApplicationLoadingOverlayProvider } from 'terra-application/lib/application-loading-overlay';


const LoadingContainerWrapper = ({ children }) => {
    return (
        <ApplicationLoadingOverlayProvider>
            {children}
        </ApplicationLoadingOverlayProvider>
    );
};

LoadingContainerWrapper.propTypes = {
    children: PropTypes.node,
};

export default LoadingContainerWrapper;