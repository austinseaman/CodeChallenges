import './App.css';
import FriendList from './FriendList';

function App() {
  return (
    <div className="App">
      <img src="https://s3fs.bestfriends.org/s3fs-public/pages/bf-utah-sugarhouse-cowpants.jpg" height="300px" width="700px" alt="dog"/>
      <h1 className="header-text">Friends with Pets!!!</h1>
      <br/>
      <FriendList />
    </div>
  );
}

export default App;
