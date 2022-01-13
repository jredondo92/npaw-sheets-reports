// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useConfiguration(key = '') {
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [configuration, setState] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getConfiguration() {
      try {
        const user = await server.serverFunctions.getConfiguration();
        setState(user);
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    getConfiguration();
  }, []);

  async function setConfiguration(value) {
    setIsLoading(true);

    try {
      await server.serverFunctions.setConfiguration(value);
      setState(value);
    } catch (e) {
      setError(e);
    }

    setIsLoading(false);
  }

  return { configuration, setConfiguration, isLoading, isMounting, error };
}
