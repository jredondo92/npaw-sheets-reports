// Dependencies
import { useState } from 'react';

// Utils
import { server } from '@Utils';

export function useStorage(key = '', initialValue) {
  const [state, setState] = useState(() => {
    try {
      const storageValue = server.serverFunctions.getProperty(key);

      if (!storageValue) {
        server.serverFunctions.setProperty(key, initialValue);
        return initialValue;
      } else {
        return storageValue;
      }
    } catch {
      return initialValue;
    }
  });

  function setValue(value) {
    server.serverFunctions.setProperty(key, value);
    setState(value);
  }

  return [state, setValue];
}
