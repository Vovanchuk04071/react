import React from 'react';
import style from './TransationHistoryItem.module.css';

const TransitionHistoryItem = ({
  id,
  type,
  amount,
  currency,
}) => (
  <tr className={style.item} key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default TransitionHistoryItem;
