import { runImport } from './sheets';
import * as publicAuthFunctions from './auth';
import * as publicConfigurationFunctions from './configuration';

export const onOpen = () => {
  const isLoggedUser = publicAuthFunctions.getUser();

  // if (!user) {
  //   SpreadsheetApp.getUi().alert('Not logged!');
  // } else {
  //   SpreadsheetApp.getUi().alert('logged!');
  // }

  const menu = SpreadsheetApp.getUi()
    .createMenu('NPAW Reports')
    .addItem('Login', 'openAuthDialog')
    .addItem('Configuration', 'openConfigurationDialog')
    .addSeparator()
    .addItem('Logout', 'logout');

  menu.addToUi();
};

export const openAuthDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-auth')
    .setWidth(400)
    .setHeight(100);

  SpreadsheetApp.getUi().showModalDialog(html, 'Login');
};

export const openConfigurationDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-configuration')
    .setWidth(400)
    .setHeight(600);

  SpreadsheetApp.getUi().showModalDialog(html, 'Configuration');
};

export const logout = () => {
  publicAuthFunctions.logoutUser();
};
