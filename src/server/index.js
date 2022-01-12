import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';
import * as publicPropertiesFunctions from './properties';
import * as publicAuthFunctions from './auth';
import * as publicConfigurationFunctions from './configuration';

// Expose public functions by attaching to `global`

// UI Methods
global.onOpen = publicUiFunctions.onOpen;
global.openAuthDialog = publicUiFunctions.openAuthDialog;
global.openConfigurationDialog = publicUiFunctions.openConfigurationDialog;
global.cleanProject = publicUiFunctions.cleanProject;

// Sheets Methods
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;

// Properties Methods
global.getPropertiesKeys = publicPropertiesFunctions.getPropertiesKeys;
global.getProperty = publicPropertiesFunctions.getProperty;
global.getProperties = publicPropertiesFunctions.getProperties;
global.setProperties = publicPropertiesFunctions.setProperties;
global.setProperty = publicPropertiesFunctions.setProperty;
global.deleteAllProperties = publicPropertiesFunctions.deleteAllProperties;
global.deleteProperty = publicPropertiesFunctions.deleteProperty;

// Auth Methods
global.loginUser = publicAuthFunctions.loginUser;
global.getUser = publicAuthFunctions.getUser;
global.logoutUser = publicAuthFunctions.logoutUser;

// Configuration Methods
global.getConfiguration = publicConfigurationFunctions.getConfiguration;
global.setConfiguration = publicConfigurationFunctions.setConfiguration;
global.deleteConfiguration = publicConfigurationFunctions.deleteConfiguration;
global.startConfiguration = publicConfigurationFunctions.startConfiguration;
