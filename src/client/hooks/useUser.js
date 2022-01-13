// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useUser() {
  const [isMounting, setIsMounting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
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

  const loginUser = async credentials => {
    try {
      setIsLoading(true);
      const user = await server.serverFunctions.loginUser(credentials);
      setUser(user);
    } catch (e) {
      setError(e?.message || e);
    }

    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      setIsLoading(true);
      await server.serverFunctions.logoutUser();
      setUser();
    } catch (e) {
      setError(e?.message || e);
    }

    setIsLoading(false);
  };

  return {
    user,
    isLoading,
    isMounting,
    error,
    isLogged: !isMounting && user,
    loginUser,
    logoutUser,
  };
}
