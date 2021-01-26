import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={style.friend__list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propType = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
