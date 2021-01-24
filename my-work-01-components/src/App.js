import React from 'react';
import './style.css';
// import Profile from './Component/Profile/Profile';
import Panel from './Component/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import user from './user.json';

const App = () => (
  <>
    {/* <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
    <Panel title="Upload stats" statistics={statisticalData} />
  </>
);

export default App;
