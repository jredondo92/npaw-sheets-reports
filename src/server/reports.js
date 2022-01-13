import * as publicAuthFunctions from './auth';
import * as publicConfigurationFunctions from './configuration';
// import * as publicPropertiesFunctions from './properties';

export const getStaticReport = () => {
  const user = publicAuthFunctions.getUser();
  const configuration = publicConfigurationFunctions.getConfiguration();

  const url = `https://fast.youbora.com/${user.accountCode}/reports/download?token=${user.token}&reportId=${configuration.reportId}`;

  try {
    const response = UrlFetchApp.fetch(url, {
      method: 'get',
    });

    // const blob = response.getBlob();
    // const data = blob.getDataAsString();
    // SpreadsheetApp.getUi().alert(data);
    SpreadsheetApp.getUi().alert(response);

    return data;
  } catch (e) {
    throw e;
  }
};
