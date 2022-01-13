// Dependencies
import { useState } from 'react';

// Utils
import { server } from '@Utils';

export function useStorage(key = '', initialValue) {
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [storage, setState] = useState();

  useEffect(() => {
    async function getStorageKey() {
      try {
        const storageValue = await server.serverFunctions.getProperty(key);

        if (!storageValue) {
          await server.serverFunctions.setProperty(key, initialValue);
          setState(initialValue);
        } else {
          setState(storageValue);
        }
      } catch {
        setState(initialValue);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    getStorageKey();
  }, []);

  async function setStorage(value) {
    setIsLoading(true);
    await server.serverFunctions.setProperty(key, value);
    setState(value);
    setIsLoading(false);
  }

  return { storage, setStorage, isLoading, isMounting };
}
