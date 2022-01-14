import * as publicAuthFunctions from './auth';
import * as publicConfigurationFunctions from './configuration';
import * as publicReportsFunctions from './reports';
import * as publicSheetsFunctions from './sheets';

export const onOpen = () => {
  publicConfigurationFunctions.startConfiguration();

  const menu = SpreadsheetApp.getUi()
    .createMenu('NPAW Reports')
    .addItem('Account...', 'openAuthDialog')
    .addItem('Configuration', 'openConfigurationDialog')
    .addSeparator()
    .addItem('Update data', 'fetchSheetWithReport');

  menu.addToUi();
};

export const openAuthDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialogAuth')
    .setWidth(320)
    .setHeight(200);

  SpreadsheetApp.getUi().showModalDialog(html, 'Account');
};

export const openConfigurationDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialogConfiguration')
    .setWidth(400)
    .setHeight(600);

  SpreadsheetApp.getUi().showModalDialog(html, 'Configuration');
};

export const fetchSheetWithReport = () => {
  const isLoggedUser = publicAuthFunctions.getUser();

  if (isLoggedUser) {
    const configuration = publicConfigurationFunctions.getConfiguration();
    const data = publicReportsFunctions.getReportData(
      configuration.previewData
    );

    publicSheetsFunctions.injectReportInSheet({ data, configuration });
  }
};
