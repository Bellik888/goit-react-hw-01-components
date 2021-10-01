import './App.css';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import statistics from './components/Statistics/statistics.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        likes={user.stats.likes}
        followers={user.stats.followers}
        views={user.stats.views}
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
