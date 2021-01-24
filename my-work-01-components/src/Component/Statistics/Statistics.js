import React from 'react';
import style from './Statistics.module.css';
// import PropTypes from 'prop-types';

const StatisticsList = ({ statistics }) => (
  <ul className="stat-list">
    {statistics.map(({ label, percentage, id }) => (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    ))}
  </ul>
);

const Panel = ({ title, statistics }) => (
  <section className={style.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <StatisticsList statistics={statistics} />
  </section>
);

// Statistics.PropTypes = {};

export default Panel;
