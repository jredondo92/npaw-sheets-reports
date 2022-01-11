import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';
import * as publicPropertiesFunctions from './properties';

// Expose public functions by attaching to `global`

// UI Methods
global.onOpen = publicUiFunctions.onOpen;
global.openDialog = publicUiFunctions.openDialog;
global.openDialogBootstrap = publicUiFunctions.openDialogBootstrap;
global.openAboutSidebar = publicUiFunctions.openAboutSidebar;

// Sheets Methods
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;

// Properties Methods
global.getProperties = publicPropertiesFunctions.getProperties;
global.getPropertiesKeys = publicPropertiesFunctions.getPropertiesKeys;
global.getPropertiesValues = publicPropertiesFunctions.getPropertiesValues;
global.setProperties = publicPropertiesFunctions.setProperties;
global.setProperty = publicPropertiesFunctions.setProperty;
global.deleteAllProperties = publicPropertiesFunctions.deleteAllProperties;
global.deleteProperty = publicPropertiesFunctions.deleteProperty;
