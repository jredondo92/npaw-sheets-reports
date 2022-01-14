import * as publicPropertiesFunctions from './properties';

const CONFIGURATION_PROPERTY_KEY = 'NPAW_REPORTS__CONFIGURATION';

// const CONFIGURATION = {
//   type: 'static' || 'dynamic', // Type of report
//
//   reportId: 'XXXXX', // For the static case
//   previewData: {}, // The formatted object to be sent to the api

//   // If  dynamic
//   name: '',
//   filter: {},
//   date: '00:00:00',
//   metrics: [],

//   Common
//   insertionCell: [0, 1], // The cell where the data is injected
//   sheet: null, // The sheet where the data is injected
// };

const DEFAULT_CONFIGURATION = {
  type: 'static',
  reportId: null,
  insertionCell: [1, 1],
  previewData: null,
  sheet: null,
};

export const getConfiguration = () => {
  return publicPropertiesFunctions.getProperty(CONFIGURATION_PROPERTY_KEY);
};

export const setConfiguration = configuration => {
  return publicPropertiesFunctions.setProperty(
    CONFIGURATION_PROPERTY_KEY,
    configuration
  );
};

export const setConfigurationKey = (key, value) => {
  const configuration = getConfiguration();
  const updatedConfiguration = {
    ...configuration,
    [key]: value,
  };

  return setConfiguration(updatedConfiguration);
};

export const deleteConfiguration = () => {
  return publicPropertiesFunctions.deleteProperty(CONFIGURATION_PROPERTY_KEY);
};

export const startConfiguration = () => {
  const configuration = getConfiguration();

  if (!configuration) {
    return setConfiguration(DEFAULT_CONFIGURATION);
  }

  return configuration;
};
