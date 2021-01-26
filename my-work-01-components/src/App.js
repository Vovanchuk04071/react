import React from 'react';
import './style.css';
import Profile from './Component/Profile/Profile';
import StatisticsList from './Component/Panel/StatisticsList/StatisticsList';
import Panel from './Component/Panel/Panel';
import FriendList from './Component/FriendList/FriendList';
import TransactionHistory from './Component/TransactionHistory/TransactionHistory';

import statisticalData from './serverItem/statistical-data.json';
import user from './serverItem/user.json';
import friends from './serverItem/friends.json';
import transactions from './serverItem/transactions.json';

const App = () => (
  <div className="wraper">
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Panel title="Upload stats">
      <StatisticsList statistics={statisticalData} />
    </Panel>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
