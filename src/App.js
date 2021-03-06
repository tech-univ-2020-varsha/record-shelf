import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Sync from './Components/Sync';
import Genres from './Components/Genres';
import SongsList from './Components/SongsList';

function App() {
  return (
    <div className="App">
      <div className="headerText">
        My
        {' '}
        <span className="recordText">Record </span>
        shelf
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Sync />
          </Route>

          <Route exact path="/genres" component={Genres} />
          <Route exact path="/genres/songs" component={SongsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
