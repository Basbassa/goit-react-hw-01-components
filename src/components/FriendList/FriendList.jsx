import React from 'react';
import friendsData from './friends.json';
import styles from './Lists.module.css';

const FriendList = () => {
  return (
    <ul className={styles['friend-list']}>
      {friendsData.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <div className={`${styles['status-dot']} ${styles.online}`}></div>
          ) : (
            <div className={`${styles['status-dot']} ${styles.offline}`}></div>
          )}
          <div className={styles['avatar-container']}>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
          </div>
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
