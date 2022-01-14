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

  function renderContent() {
    if (isLoadingReports) {
      return 'Loading Reports!!!';
    }

    return reports.map(el => {
      return (
        <label>
          <input
            type="checkbox"
            checked={isChecked(el.id)}
            onChange={ev => onSelectReport(ev, el.id, el.parameters.sheets[0])}
          />
          {el.title}
        </label>
      );
    });
  }

  return (
    <div>
      {/* <span>{JSON.stringify(configuration)}</span>; */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
