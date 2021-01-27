import React from 'react';
import style from './TransactionHistory.module.css';
import TransitionHistoryItem from './TransationHistoryItem/TransationHistiryItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={style.transaction__history}>
    <thead>
      <tr className={style.header}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransitionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propType = {
  items: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
