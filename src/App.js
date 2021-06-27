import React from 'react';
//import Home from './Home.js';
import './Home.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

let events = [
  { date:"15 juillet 2021",title:"t1", desc:"desc" },
  { date:"15 aout 2021",title:"t2", desc:"desc" },
  { date:"15 sept 2021",title:"t3", desc:"desc" },
  { date:"15 oct 2021",title:"t4", desc:"desc" },
]

let categories = []

function App() {
  return (
    <Router>
      <Demo />
    </Router>
  );
}

function Demo() {
  let urlParam = "John"

  return (
    <div>
      <div>
        <Link to={'/'}>Evènements</Link> - 
        <Link to={`/event/${urlParam}`}>Ajouter un évènement</Link> -
        <Link to={'/categories'}>Gérer les catégories</Link>
      </div>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/event/:id' component={Event} />
        <Route path='/categories' component={Categories} />
      </Switch>
    </div>
  );
}

let listItems = events.map(e => (
  //<EventItem date={e.date} desc={e.desc} />
  <li class="itemEvent">
    <p>{e.date} - {e.title}</p>
    <p>{e.desc}</p>
  </li>
));

let Home = () => (
  <div>
    <Menu/>
    <div id="eventsList">
      <input placeholder="Rechercher un évènement"/>
      <ul id="listItems">{listItems}</ul>
    </div>
  </div> 
)

let EventItem = (props) => (
  <li id="itemEvent">
    <p>{props.date} - {props.desc}</p>
  </li>
)

let Menu = () => (
  <div id="categories">
    <h3>Catégories</h3>
    <p>Spatial</p>
    <p>Cinéma</p>
    <p>Technologie</p>
  </div>
)

//<h2>Url param : {props.match.params.id}</h2>
let Event = (props) => (
  <div>
    <p>Titre</p>
    <input />
    <p>Date</p>
    <input />
    <p>Description</p>
    <input />
    <div>
      <button>Annuler</button>
      <button>Ajouter</button>
    </div>
  </div>
)

let Categories = () => (
  <div>
    <p>Spatial <button>Supprimer</button></p>
    <p>Cinéma <button>Supprimer</button></p>
    <p>Mondial <button>Supprimer</button></p>
    <input />
    <button>Ajouter</button>
    <div>
      <button>Annuler</button>
    </div>
  </div>
)


export default App;
