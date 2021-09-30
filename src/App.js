import './App.css';
import { Profile } from './components/Profile/Profile';
import user from './json/user.json';

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
    </div>
  );
}

export default App;
