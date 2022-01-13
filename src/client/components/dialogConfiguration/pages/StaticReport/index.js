// Hooks
import { useStorage, useUser, useConfiguration, useReports } from '@Hooks';

// {
//     "id": 1339413,
//     "parentId": 0,
//     "systemId": 20001120,
//     "createdAt": 1630393638000,
//     "fromDate": 1625868000000,
//     "toDate": 1625868659000,
//     "createdAtFormatted": "2021-08-31 09:07:18",
//     "fromDateFormatted": "2021-07-10 00:00:00",
//     "toDateFormatted": "2021-07-10 00:10:59",
//     "split": "NONE",
//     "statusProcess": 100,
//     "timezone": "Europe/Madrid",
//     "title": "Top5User AgentByPlays_24082021-Clone",
//     "module": "analytics",
//     "template": "Blank",
//     "reportType": "FastReport",
//     "status": "DONE",
//     "recurrency": {
//         "recurrencyType": "NONE",
//         "from": "0",
//         "to": "0",
//         "days": []
//     },
//     "s3KeyName": "20001120/1339413/1630393648148/Report-devyoubora-Top5User AgentByPlays_24082021-Clone-2021-07-10 00:00:00-2021-07-10 00:10:59.zip",
//     "extension": "csv",
//     "lastExecution": 1630393648000,
//     "communications": {
//         "emails": [],
//         "communicationConnectors": [],
//         "storageConnectors": []
//     },
//     "callback": "",
//     "cluster": "default",
//     "createdBy": "ssimon_npaw",
//     "parameters": {
//         "useStart": true,
//         "sortReport": false,
//         "sheets": [
//             {
//                 "reportType": "AggregatedReport",
//                 "filters": [
//                     {
//                         "id": "city*",
//                         "operator": "EQ",
//                         "value": "[San]+",
//                         "filters": []
//                     }
//                 ],
//                 "table": {
//                     "fields": [
//                         {
//                             "entity": "useragent",
//                             "values": [
//                                 "TOP5"
//                             ],
//                             "orderBy": "views",
//                             "groups": []
//                         }
//                     ],
//                     "metrics": [
//                         "views",
//                         "successfulPlays",
//                         "hours"
//                     ]
//                 },
//                 "showHeaders": true,
//                 "showTotals": false,
//                 "showOthers": false,
//                 "showDiff": false
//             }
//         ],
//         "filters": [],
//         "systemIds": [],
//         "mergeSheets": false
//     },
//     "compression": "zip",
//     "isPublic": true,
//     "readsSegments": true,
//     "isSmartReportsMigrated": false,
//     "downloadOldSegmentsFromS3": false,
//     "forceClickhouse": false,
//     "priority": 5,
//     "titlePattern": 0,
//     "headersVersion": 4,
//     "executionTime": 1
// }

export function StaticReport() {
  const { configuration, setConfiguration } = useConfiguration();
  const { isLoading: isLoadingReports, reports } = useReports();

  function isChecked(id) {
    return configuration.reportId === id;
  }

  function onSelectReport(ev, reportId) {
    if (ev.target.checked) {
      setConfiguration({
        ...configuration,
        reportId,
      });
    }
  }

  return (
    <div>
      <span>{JSON.stringify(configuration)}</span>;
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 400,
          overflow: 'auto',
        }}
      >
        {reports.map(el => {
          return (
            <label>
              <input
                type="checkbox"
                onChange={ev => onSelectReport(ev, el.id)}
                checked={isChecked(el.id)}
              />
              {el.title}
            </label>
          );
        })}
      </div>
    </div>
  );
}
