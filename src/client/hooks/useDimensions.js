// Dependencies
import { useState, useEffect } from 'react';

// Hooks
import { useUser } from '@Hooks';

export function useDimensions() {
  const { isMounting: isMountingUser, user } = useUser();

  // State
  const [dimensions, setDimensions] = useState([]);
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchDimensions() {
      setIsLoading(true);
      try {
        const response = await window.fetch(
          `https://ui-api.youbora.com/devyoubora/dimensions?token=${user.token}`
        );

        const json = await response.json();
        setDimensions(json.data.filter(report => report.extension === 'csv'));
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    if (!isMountingUser) {
      fetchDimensions();
    }
  }, [isMountingUser]);

  return {
    dimensions,
    isMounting,
    isLoading,
    error,
  };
}
