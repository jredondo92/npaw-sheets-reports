import React, { useState, useEffect } from 'react';

import server from '../../utils/server';

const { serverFunctions } = server;

const AUTH_PROPERTY_KEY = 'NPAW_REPORTS__AUTH';

export const AuthForm = () => {
  const [loggedUser, setLoggedUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    async function getProperties() {
      const response = await serverFunctions.getProperty(AUTH_PROPERTY_KEY);
      setLoggedUser(response);
      setIsLoading(false);
    }

    getProperties();
  }, []);

  const onChangeInput = key => ev => {
    setCredentials({
      ...credentials,
      [key]: ev.target.value,
    });
  };

  async function onSubmit() {
    setIsLoading(true);

    try {
      const user = await serverFunctions.loginUser({
        username: 'hugo_npaw.devyoubora',
        password: 'hugo_npaw_20918!',
      });
      setLoggedUser(user);
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  }

  if (isLoading) {
    return 'Loading...';
  }

  if (loggedUser) {
    return (
      <div>
        <p>{`Logged in account ${loggedUser.accountCode}`}</p>
      </div>
    );
  }

  return (
    <div className={'dialog_auth__form'}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeInput('username')}
          required
          name={'username'}
          type={'username'}
          value={credentials.username}
          placeholder={'Username'}
        />
        <input
          onChange={onChangeInput('password')}
          required
          name={'password'}
          type={'password'}
          value={credentials.password}
          placeholder={'password'}
        />
        <button type={'submit'}>Login</button>
      </form>
    </div>
  );
};