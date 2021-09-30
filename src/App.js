import './App.css';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import statistics from './components/Statistics/statistics.json';

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
      <Statistics statistics={statistics} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
