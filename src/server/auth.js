import * as publicPropertiesFunctions from './properties';
import * as publicConfigurationFunctions from './configuration';

const AUTH_PROPERTY_KEY = 'NPAW_REPORTS__AUTH';

export const getUser = () => {
  const user = publicPropertiesFunctions.getProperty(AUTH_PROPERTY_KEY);
  return user;
};

export const loginUser = payload => {
  const url = `https://ui-api.youbora.com/authentication/users/login`;

  const payloadEncoded = Object.keys(payload)
    .map(k => {
      return `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`;
    })
    .join('&');

  try {
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      payload: payloadEncoded,
    });

    const { username, token, accountCode, accountId } = JSON.parse(
      response.getContentText()
    );

    const userInfo = {
      username,
      token,
      accountCode,
      accountId,
    };

    // Save to storage
    publicPropertiesFunctions.setProperty(AUTH_PROPERTY_KEY, userInfo);
    publicConfigurationFunctions.startConfiguration();

    SpreadsheetApp.getActiveSpreadsheet().toast('Logged');

    return userInfo;
  } catch (e) {
    throw e;
  }
};

export const logoutUser = () => {
  // const user = publicPropertiesFunctions.deleteProperty('user');
  publicPropertiesFunctions.deleteAllProperties();
  publicConfigurationFunctions.startConfiguration();
  SpreadsheetApp.getActiveSpreadsheet().toast('Logged out');
};
