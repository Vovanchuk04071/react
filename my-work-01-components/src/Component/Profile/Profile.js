import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={style.user}>
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="{Аватар пользователя}"
          className={style.avatar}
        />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
