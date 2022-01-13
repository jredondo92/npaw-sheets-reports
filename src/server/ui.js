import * as publicAuthFunctions from './auth';
import * as publicConfigurationFunctions from './configuration';
import * as publicReportsFunctions from './reports';

export const onOpen = () => {
  const isLoggedUser = publicAuthFunctions.getUser();
  publicConfigurationFunctions.startConfiguration();

  const menu = SpreadsheetApp.getUi()
    .createMenu('NPAW Reports')
    .addItem('Login', 'openAuthDialog')
    .addItem('Configuration', 'openConfigurationDialog')
    .addSeparator()
    .addItem('Fetch', 'fetchSheetWithReport')
    .addSeparator()
    .addItem('Logout', 'cleanProject');

  menu.addToUi();
};

export const openAuthDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialogAuth')
    .setWidth(320)
    .setHeight(100);

  SpreadsheetApp.getUi().showModalDialog(html, 'Login');
};

export const openConfigurationDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialogConfiguration')
    .setWidth(400)
    .setHeight(600);

  SpreadsheetApp.getUi().showModalDialog(html, 'Configuration');
};

export const cleanProject = () => {
  publicAuthFunctions.logoutUser();
  SpreadsheetApp.getUi().alert('Logged out');
};

export const fetchSheetWithReport = () => {
  publicReportsFunctions.getStaticReport();
  SpreadsheetApp.getUi().alert('Report!!!!');
};
