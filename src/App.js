import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Sync from './Components/Sync';
import Genres from './Components/Genres';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">

            <Sync />
          </Route>

          <Route exact path="/genres"><Genres /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
