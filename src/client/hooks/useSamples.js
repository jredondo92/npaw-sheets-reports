// Dependencies
import { useState, useEffect } from 'react';

// Hooks
import { useUser } from '@Hooks';

export function useSamples() {
  const { isMounting: isMountingUser, user } = useUser();

  // State
  const [samples, setSamples] = useState([]);
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchSamples() {
      setIsLoading(true);
      try {
        const response = await window.fetch(
          `https://fast.youbora.com/devyoubora/samples/get/samples?token=${user.token}`
        );

        const json = await response.json();
        setSamples(json.data.filter(report => report.extension === 'csv'));
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    if (!isMountingUser) {
      fetchSamples();
    }
  }, [isMountingUser]);

  return {
    samples,
    isMounting,
    isLoading,
    error,
  };
}
