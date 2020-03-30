import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AddEvent />
        <EventList />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <p>{this.props.data.event}</p>
    );
  }
}

class AddEvent extends Component {
  render() {
    return (
      <div className="app">
        <div id="bt">
          <input type="text"/>
          <button
            onClick={() => alert("add")}
          >Add event</button>
        </div>
      </div>
    );
  }
}

class EventList extends Component {
  constructor() {
    super();
    this.event = {
      data:
      [
        { "event":"e1" },
        { "event":"e2" },
        { "event":"e3" }
      ]
    }
  }

  render() {
    return (
      <div className="events-list">
          {this.event.data.map((item) => <List data = {item} />)}
      </div>
    );
  }
}

export default App;
