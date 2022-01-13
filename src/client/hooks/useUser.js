// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { server } from '@Utils';

export function useUser() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const user = await server.serverFunctions.getUser();
      setUser(user);
    }

    getUser();
  }, []);

  return user;
}
