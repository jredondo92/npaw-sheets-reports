const getSheets = () => SpreadsheetApp.getActive().getSheets();

const getActiveSheetName = () => SpreadsheetApp.getActive().getSheetName();

export const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const name = sheet.getName();
    return {
      name,
      index,
      isActive: name === activeSheetName,
    };
  });
};

export const addSheet = sheetTitle => {
  SpreadsheetApp.getActive().insertSheet(sheetTitle);
  return getSheetsData();
};

export const deleteSheet = sheetIndex => {
  const sheets = getSheets();
  SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

export const setActiveSheet = sheetName => {
  SpreadsheetApp.getActive()
    .getSheetByName(sheetName)
    .activate();
  return getSheetsData();
};

function getRandomData() {
  return (Math.random() * 1000).toFixed(2).toString();
}

const response = [
  [
    'Title',
    'Plays',
    'Avg. Playtime',
    'Avg. Completion Rate',
    'Playtime',
    'Traffic',
    'Avg. Bitrate (Mbps)',
    'Unique Users',
  ],
  [
    'LIVE_QT',
    '401249',
    '15.617',
    getRandomData(),
    '104372.323',
    '3054.952',
    '1.844',
    '223166',
  ],
  [
    'LIVE_US_MINI',
    '238736',
    '15.807',
    getRandomData(),
    '62843.168',
    '50.745',
    getRandomData(),
    '214613',
  ],
];

export function runImport() {
  const rows = response.length;
  const columns = response[0].length;
  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
    const range = sheet.getRange(1, 1, rows, columns);
    range.setValues(response);
    Logger.log('Completed');

    sheet.autoResizeColumns(1, columns);
  } catch (e) {
    Logger.log(e);
  }
}
