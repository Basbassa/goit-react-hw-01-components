import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from './Stats/data.json';

export const App = () => {
  return (
    <div style={{ display: 'grid', gap: '3%' }}>
      <Profile />
      <Stats title="Upload stats" stats={data} />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
