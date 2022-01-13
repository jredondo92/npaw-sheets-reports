// Hooks
import { useStorage, useUser, useConfiguration } from '@Hooks';

export function StaticReport() {
  const userData = useUser();
  const { configuration, setConfiguration } = useConfiguration();
  return (
    <div>
      {/* <span>{JSON.stringify(userData)}</span>; */}
      <span>{JSON.stringify(configuration)}</span>;
      <button
        onClick={() => {
          setConfiguration({
            ...configuration,
            reportId: 10,
          });
        }}
      >
        Test
      </button>
    </div>
  );
}
