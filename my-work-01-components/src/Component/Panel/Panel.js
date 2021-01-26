import React from 'react';
import PropTypes from 'prop-types';
import style from './Panel.module.css';

const Panel = ({ title, children }) => (
  <section className={style.statistics}>
    {title && <h2 className="title">{title}</h2>}
    {children}
  </section>
);

Panel.defaultProps = {
  title: '',
};

Panel.propType = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
