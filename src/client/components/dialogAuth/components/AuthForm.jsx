// Dependencies
import React, { useState, useEffect } from 'react';

// Utils
import { useUser } from '@Hooks';

export const AuthForm = () => {
  const { isLogged, isMounting, isLoading, user, error, loginUser } = useUser();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const onChangeInput = key => ev => {
    setCredentials({
      ...credentials,
      [key]: ev.target.value,
    });
  };

  async function onSubmit() {
    await loginUser(credentials);
  }

  if (isMounting || isLoading) {
    return 'Loading...';
  }

  if (isLogged) {
    return (
      <div>
        <p>{`Logged in account ${user.accountCode}`}</p>
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
      {error}
    </div>
  );
};
