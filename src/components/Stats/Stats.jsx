import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map((stat, index) => (
          <li className={styles.item} key={index}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
