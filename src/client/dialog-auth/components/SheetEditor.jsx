import React, { useState, useEffect } from 'react';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

const SheetEditor = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  // You can also use async/await notation for server calls with our server wrapper.
  // (This does the same thing as .then().catch() in the above handlers.)
  async function onSubmit() {
    try {
      const response = await serverFunctions.loginUser({
        username: 'hugo_npaw.devyoubora',
        password: 'hugo_npaw_20918!',
      });
      setCredentials(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }

  return (
    <div>
      <p>
        This is a sample page that demonstrates a simple React app. Enter a name
        for a new sheet, hit enter and the new sheet will be created. Click the
        red &times; next to the sheet name to delete it.
      </p>

      {JSON.stringify(credentials)}
      <button onClick={onSubmit}>Login test</button>
    </div>
  );
};

export default SheetEditor;
