import React from 'react';
import AddEvent from './AddEvent.js';
import Home from './Home.js';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabDisplayed:'home',
      events:
      [
        { "event":{ "titre":"titre1", "date":"date1", "catg":"Cinéma" } },
        { "event":{ "titre":"titre2", "date":"date2", "catg":"Spatial" } },
        { "event":{ "titre":"titre3", "date":"date3", "catg":"Techno" } },
      ],
      categories: [ "Cinéma", "Spatial", "Techno" ]
    }
    this.changeTabsDisplayed = this.changeTabsDisplayed.bind(this)
    this.addEvent = this.addEvent.bind(this)
  }
  changeTabsDisplayed(tab){
    console.log(tab)
    this.setState({tabDisplayed:tab})
  }
  addEvent(event){
    console.log(event)
    this.setState({events:[...this.state.events,{"event":event}]})
    console.log(this.state.events)
    this.setState({tabDisplayed:"home"})
  }
  render() {
    let tab = <Home events={this.state.events} categories={this.state.categories}/>
    if(this.state.tabDisplayed === 'addEvent') {
      tab = <AddEvent addEvent={this.addEvent}/>
    }
    return (
      <div>
        <Tabs changeTabsDisplayed={this.changeTabsDisplayed}/>
        {tab}
      </div>
    );
  }
}


function Tabs(props) {
  return (
    <div>
      <button onClick={() => props.changeTabsDisplayed('home')}>Home</button>
      <button onClick={() => props.changeTabsDisplayed('addEvent')}>Add event</button>
    </div>
  );
}

export default App;
