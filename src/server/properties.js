var documentProperties = PropertiesService.getDocumentProperties();

export const getPropertiesKeys = () => {
  return documentProperties.getKeys();
};

export const getProperty = key => {
  return documentProperties.getProperty(key);
};

export const getProperties = () => {
  return documentProperties.getProperties();
};

export const setProperties = properties => {
  return documentProperties.setProperties(properties);
};

export const setProperty = (key, value) => {
  return documentProperties.setProperty(key, value);
};

export const deleteAllProperties = () => {
  return documentProperties.deleteAllProperties();
};

export const deleteProperty = key => {
  return documentProperties.deleteProperty(key);
};
