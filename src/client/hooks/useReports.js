// Dependencies
import { useState, useEffect } from 'react';

// Hooks
import { useUser } from '@Hooks';

export function useReports() {
  const { isMounting: isMountingUser, user } = useUser();
  const [reports, setReports] = useState([]);
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchReports() {
      setIsLoading(true);
      try {
        const response = await window.fetch(
          `https://fast.youbora.com/${user.accountCode}/reports/get?token=${user.token}`
        );

        const json = await response.json();
        setReports(json.data.filter(report => report.extension === 'csv'));
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    if (!isMountingUser) {
      fetchReports();
    }
  }, [isMountingUser]);

  return {
    reports,
    // setReports,
    isMounting,
    isLoading,
    error,
  };
}
