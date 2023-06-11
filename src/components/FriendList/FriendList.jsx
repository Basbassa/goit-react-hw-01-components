import React from 'react';
import friendsData from './friends.json';
import styles from './Lists.module.css';

const FriendList = () => {
  return (
    <ul className={styles['friend-list']}>
      {friendsData.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={`status ${friend.isOnline ? 'online' : 'offline'}`}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <div
            className={`${styles['status-dot']} ${
              friend.isOnline ? 'online' : 'offline'
            }`}
          ></div>
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
