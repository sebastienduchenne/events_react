import React from 'react';
import AddEvent from './AddEvent.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <span><Link to="/home">Liste des évènements</Link> | </span>
          <span><Link to="/addEvent">Ajouter un évènement</Link></span>
          
          <hr />

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/addEvent">
              <AddEvent />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
