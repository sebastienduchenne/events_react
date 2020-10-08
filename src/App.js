import React from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


class App extends React.Component {
  outputEvent(event) {
    alert("add event")
  }
  outputEvent2(event) {
    alert("add catg")
  }
  render() {
    return (
      <div className="app">
        <Menu 
          clickHandler={this.outputEvent} 
          clickHandler2={this.outputEvent2}/>
        <Categories />
        <EventList />
      </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.data.event.titre}</span> - 
        <span>{this.props.data.event.date}</span>
      </div>
    );
  }
}

class Categories extends React.Component {
  render() {
    return (
      <div id="Categories">
        <h3>Catégories</h3>
        <p>ccc</p>
        <p>ccc</p>
        <p>ccc</p>
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <div>
          <button onClick={this.props.clickHandler}>Ajouter évènement</button>
          <button onClick={this.props.clickHandler2}>Ajouter catégorie</button>
          <input type="text"></input>
          <button onClick={() => alert("rechercher")}>rechercher</button>
        </div>
      </div>
    );
  }
}

class EventList extends React.Component {
  constructor() {
    super();
    this.event = {
      data:
      [
        { 
          "event":{
            "titre":"1",
            "date":"d"
          } 
        },
        { 
          "event":{
            "titre":"1",
            "date":"d"
          } 
        },
        { 
          "event":{
            "titre":"1",
            "date":"d"
          } 
        },
      ]
    }
  }

  render() {
    return (
      <div id="eventsList">
          {this.event.data.map((item) => <ItemList data = {item} />)}
      </div>
    );
  }
}

export default App;
