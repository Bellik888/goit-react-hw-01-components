import './App.css';
import { Profile } from './components/Profile';
import user from './json/user.json';

function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
