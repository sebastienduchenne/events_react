import React, { Component } from 'react';
//import './App.css';

class App extends Component {
  constructor() {  
    super();
  }  

  render() {
    return (
      <div className="app">
        <Menu />
        <Event_list />
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

class Menu extends Component {
  constructor() {  
    super();
    this.catg = {
      data:   
      [  
        { "event":"c1" },
        { "event":"c2" },
        { "event":"c3" }  
      ]  
    }
  }

  render() {
    return (
      <div className="app">
        <div id="menu">
          {this.catg.data.map((item) => <List data = {item} />)}
        </div>
        <div id="bt">
          <button>add event</button>
        </div>
      </div>
    );
  }
}


class Event_list extends Component {
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
