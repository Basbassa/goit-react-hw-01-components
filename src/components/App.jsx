import React from 'react';
import Profile from './socialProfile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from './Stats/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Stats title="Upload stats" stats={data} />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
