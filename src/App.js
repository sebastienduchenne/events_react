import React from 'react';
import DetailEvent from './DetailEvent.js';
import Home from './Home.js';


let events = [
  { "key":"1", "titre":"Film", "date":"10/05/2021", "catg":"Cinéma" },
  { "key":"2", "titre":"Sonde", "date":"14/06/2025", "catg":"Spatial" },
  { "key":"3", "titre":"Techno", "date":"05/01/2026", "catg":"Technologie" },
]


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabDisplayed:'home',
      eventsDisplayed: events,
      categories: [ "Toutes", "Cinéma", "Spatial", "Technologie" ],
      search: undefined
    }
    this.changeTabsDisplayed = this.changeTabsDisplayed.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.search = this.search.bind(this)
    this.editOnClick = this.editOnClick.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.deleteOnClick = this.deleteOnClick.bind(this)
  }
  changeTabsDisplayed(tab){
    console.log(tab)
    this.setState({tabDisplayed:tab})
  }
  addEvent(event){
    console.log(event)
    this.setState({eventsDisplayed:[...this.state.eventsDisplayed,event]})
    console.log(this.state.eventsDisplayed)
    this.setState({tabDisplayed:"home"})
  }
  search(text) {
    console.log("search:" + text)
  }
  editOnClick(key){
    console.log("editOnClick:" + key)
    this.setState({tabDisplayed:"editEvent"})
  }
  editEvent(key){
    console.log("editEvent:" + key)
  }
  deleteOnClick(key){
    console.log("deleteOnClick:" + key)
    //for (const e of events) {}
  }
  render() {
    let tab = <Home 
                  eventsDisplayed={this.state.eventsDisplayed} 
                  categories={this.state.categories}
                  editOnClick={this.editOnClick}
                  deleteOnClick={this.deleteOnClick}
                  search={this.search} />

    if(this.state.tabDisplayed === 'addEvent') {
      tab = <DetailEvent 
                confirm={this.addEvent}
                event={ {"key":"4", "titre":undefined, "date":undefined, "catg":undefined} } 
                title={"Ajouter un évènement"} />
    } else if(this.state.tabDisplayed === 'editEvent') {
      tab = <DetailEvent 
                confirm={this.editEvent}
                event={ {"key":"3", "titre":"titre3", "date":"05/01/2026", "catg":"Techno"} } 
                title={"Editer un évènement"} />
    }

    return (
      <div>
        <Tabs changeTabsDisplayed={this.changeTabsDisplayed} />
        {tab}
      </div>
    );
  }
}


function Tabs(props) {
  return (
    <span>
      <button onClick={() => props.changeTabsDisplayed('home')}>Home</button>
      <button onClick={() => props.changeTabsDisplayed('addEvent')}>Add event</button>
    </span>
  );
}


export default App;
