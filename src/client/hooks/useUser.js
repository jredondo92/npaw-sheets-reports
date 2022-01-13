// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useUser() {
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const user = await server.serverFunctions.getUser();
      setUser(user);
      setIsLoading(false);
      setIsMounting(false);
    }

    getUser();
  }, []);

  return { user, isLoading, isMounting };
}
