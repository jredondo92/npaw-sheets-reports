export const getProperties = () => PropertiesService.getDocumentProperties();
export const getPropertiesKeys = () => getProperties().getKeys();
export const getPropertiesValues = () => getProperties().getKeys();
export const setProperties = properties =>
  getProperties().setProperties(properties);
export const setProperty = (key, value) =>
  getProperties().setProperties(key, value);
export const deleteAllProperties = () => getProperties().deleteAllProperties();
export const deleteProperty = key => getProperties().deleteProperty(key);
