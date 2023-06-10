import React from 'react';
import Profile from './socialProfile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';

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
      <Profile />
      <Stats />
      <FriendList />
    </div>
  );
};

export default App;
