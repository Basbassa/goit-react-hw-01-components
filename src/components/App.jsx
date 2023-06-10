import React from 'react';
import Profile from './socialProfile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Ustawienie układu kolumnowego
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Stats />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
