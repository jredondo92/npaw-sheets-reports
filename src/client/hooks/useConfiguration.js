// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useConfiguration(key = '') {
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [configuration, setState] = useState();

  useEffect(() => {
    async function getConfiguration() {
      const user = await server.serverFunctions.getConfiguration();
      setState(user);
    }

    getConfiguration();
    setIsLoading(false);
    setIsMounting(false);
  }, []);

  async function setConfiguration(value) {
    setIsLoading(true);
    await server.serverFunctions.setConfiguration(value);
    setState(value);
    setIsLoading(false);
  }

  return { configuration, setConfiguration, isLoading, isMounting };
}
