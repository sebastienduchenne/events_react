import React from 'react';
import './Home.css';


class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        events:
        [
          { "event":{ "titre":"titre", "date":"date", "catg":"Cinéma" } },
          { "event":{ "titre":"titre", "date":"date", "catg":"Spatial" } },
          { "event":{ "titre":"titre", "date":"date", "catg":"Techno" } },
        ],
        categories: [ "Cinéma", "Spatial", "Techno" ]
      }
      this.search = this.search.bind(this)
      this.displayCatg = this.displayCatg.bind(this)
    }
    search(event) {
      this.setState( {
        events:
        [
          { "event":{ "titre":"titre", "date":"date", "catg":"Spatial" } },
        ]
      })
    }
    displayCatg(event){
      this.setState( {
        events:
        [
          { "event":{ "titre":"titre", "date":"date", "catg":"Cinéma" } },
        ]
      })
    }
    render() {
      return (
        <div className="app">
          <Search clickHandler={this.search} />
          <Categories categories={this.state.categories} clickHandler={this.displayCatg}/>
          <EventList events={this.state.events}/>
        </div>
      );
    }
  }
  
  class Categories extends React.Component {
    render() {
      return (
        <div id="categories">
          <h3>Catégories</h3>
          {this.props.categories.map((item) => <p onClick={() => this.props.clickHandler(`${item}`)}>{item}</p>)}
        </div>
      );
    }
  }
  
  class Search extends React.Component {
    render() {
      return (
        <div id="search">
          <div>
            <input type="text"></input>
            <button onClick={this.props.clickHandler}>rechercher</button>
            <span></span>
          </div>
        </div>
      );
    }
  }
  
  class EventList extends React.Component {
    render() {
      return (
        <div id="eventsList">
            {this.props.events.map((item) => <ItemEvent data = {item} />)}
        </div>
      );
    }
  }
  
  class ItemEvent extends React.Component {
    render() {
      return (
        <div className="itemEvent">
          <span>{this.props.data.event.catg}</span> -
          <span> {this.props.data.event.date}</span> -
          <span> {this.props.data.event.titre}</span>
        </div>
      );
    }
  }

export default Home;
