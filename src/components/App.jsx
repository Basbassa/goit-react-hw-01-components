import React from 'react';
import Profile from './socialProfile/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <p>Something happend..</p>
      <Profile />
    </div>
  );
};

export default App;
