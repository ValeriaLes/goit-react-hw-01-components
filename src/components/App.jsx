import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Statistics } from './Statistics/Statistics';
import { Friendlist } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
      stats ={data}
      title="Upload stats"/>

      <Friendlist
      friends ={friends}/>

      <TransactionHistory
      items={transactions}/>
      
     
      
    </div>
  );
};
