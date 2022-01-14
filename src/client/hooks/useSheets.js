// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useSheets(key = '') {
  const [sheets, setState] = useState();
  const [activeSheet, setActiveSheet] = useState();
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getSheets() {
      try {
        const sheets = await server.serverFunctions.getSheets();
        const activeSheet = await server.serverFunctions.getActiveSheetName();
        setState(sheets);
        setActiveSheet(activeSheet);
      } catch (e) {
        setError(e);
      }

      setIsLoading(false);
      setIsMounting(false);
    }

    getSheets();
  }, []);

  return { sheets, activeSheet, isLoading, isMounting, error };
}
