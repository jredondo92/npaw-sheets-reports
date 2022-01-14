import * as publicPropertiesFunctions from './properties';

const CONFIGURATION_PROPERTY_KEY = 'NPAW_REPORTS__CONFIGURATION';

// const CONFIGURATION = {
//   type: 'static' || 'dynamic',
//   // If static
//   reportId: 'XXXXX',
//   previewData: {},

//   // If  dynamic
//   name: '',
//   filter: {},
//   date: '00:00:00',
//   metrics: [],

//   // Common
//   insertionCell: [0, 1],
// };

const DEFAULT_CONFIGURATION = {
  type: 'static',
  reportId: null,
  insertionCell: [0, 0],
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
