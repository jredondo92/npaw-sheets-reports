// Hooks
import { useStorage, useUser, useConfiguration, useReports } from '@Hooks';

export function StaticReport() {
  const { configuration, setConfiguration } = useConfiguration();
  const { isLoading: isLoadingReports, reports } = useReports();

  function isChecked(id) {
    return configuration.reportId === id;
  }

  function onSelectReport(ev, reportId, previewData) {
    if (ev.target.checked) {
      setConfiguration({
        ...configuration,
        reportId,
        previewData,
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
                checked={isChecked(el.id)}
                onChange={ev =>
                  onSelectReport(ev, el.id, el.parameters.sheets[0])
                }
              />
              {el.title}
            </label>
          );
        })}
      </div>
    </div>
  );
}
