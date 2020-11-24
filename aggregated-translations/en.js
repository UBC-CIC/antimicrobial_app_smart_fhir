'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin modal dialog",
  "Terra.AbstractModal.EndModalDialog": "End modal dialog",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Success.",
  "Terra.alert.unsatisfied": "Required Action.",
  "Terra.alert.unverified": "Outside Records.",
  "Terra.alert.warning": "Warning.",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigation Items",
  "Terra.applicationNavigation.drawerMenu.utilities": "Utility Items",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Skip to Content",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "User Settings",
  "Terra.applicationNavigation.notifications.new": "New",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "More Navigation",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "More",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilities",
  "Terra.applicationNavigation.utilityMenu.help": "Help",
  "Terra.applicationNavigation.utilityMenu.logout": "Logout",
  "Terra.applicationNavigation.utilityMenu.settings": "Settings",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.hazard-high": "Alert",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.popup.header.close": "Close",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorized",
  "terraApplication.errorBoundary.defaultErrorMessage": "The system encountered an error: {errorDetails}",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Don't Save",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Unsaved changes were made to the following:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continue Editing",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Unsaved changes were made to {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Unsaved Changes"
};
var areTranslationsLoaded = true;
var locale = 'en';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
