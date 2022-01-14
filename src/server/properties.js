var documentProperties = PropertiesService.getDocumentProperties();

export const getPropertiesKeys = () => {
  return documentProperties.getKeys();
};

export const getProperty = (key, defaultValue) => {
  const property = documentProperties.getProperty(key);
  if (!property) {
    return defaultValue;
  }

  return JSON.parse(property);
};

export const getProperties = () => {
  return documentProperties.getProperties();
};

export const setProperties = properties => {
  return documentProperties.setProperties(properties);
};

export const setProperty = (key, value) => {
  try {
    const serializedItem = JSON.stringify(value);
    documentProperties.setProperty(key, serializedItem);
  } catch (e) {
    //
  }
};

export const deleteAllProperties = () => {
  return documentProperties.deleteAllProperties();
};

export const deleteProperty = key => {
  return documentProperties.deleteProperty(key);
};
