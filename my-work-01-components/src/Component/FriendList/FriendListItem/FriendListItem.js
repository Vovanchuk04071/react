import React from 'react';
import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const activeClass =
    isOnline === true ? style.active : style.disable;
  return (
    <li className={style.item}>
      <span className={activeClass}></span>
      <img
        className={style.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
