import { runImport } from './sheets';

export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('NPAW Reports') // edit me!
    .addItem('Sheet Editor', 'openDialog')
    .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
  runImport();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
