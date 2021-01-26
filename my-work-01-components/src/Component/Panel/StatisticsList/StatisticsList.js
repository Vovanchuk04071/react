import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsList.module.css';

const StatisticsList = ({ statistics }) => (
  <ul className={style.stat__list}>
    {statistics.map(({ label, percentage, id }) => (
      <StatisticsItem
        label={label}
        percentage={percentage}
        key={id}
      />
    ))}
  </ul>
);

const StatisticsItem = ({ label, percentage }) => (
  <li className={style.item}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

StatisticsList.propTypes = {
  statistics: PropTypes.array,
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
