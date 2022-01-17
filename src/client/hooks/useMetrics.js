// Dependencies
import { useState, useEffect } from 'react';

// Hooks
import { useUser } from '@Hooks';

export function useMetrics() {
  const { isMounting: isMountingUser, user } = useUser();

  // State
  const [metrics, setMetrics] = useState([]);
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMetrics() {
      setIsLoading(true);
      try {
        const response = await window.fetch(
          `https://ui-api.youbora.com/devyoubora/metrics?token=${user.token}`
        );

        const json = await response.json();
        setMetrics(json);
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    if (!isMountingUser) {
      fetchMetrics();
    }
  }, [isMountingUser]);

  return {
    metrics,
    isMounting,
    isLoading,
    error,
  };
}
