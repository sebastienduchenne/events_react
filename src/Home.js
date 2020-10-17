import React from 'react';
import './Home.css';


class Home extends React.Component {
    constructor(props){
      super(props)
      this.search = this.search.bind(this)
      this.displayCatg = this.displayCatg.bind(this)
    }
    search(event) {

    }
    displayCatg(event){

    }
    render() {
      return (
        <div className="app">
          <Search clickHandler={this.search} />
          <Categories categories={this.props.categories} clickHandler={this.displayCatg}/>
          <EventList events={this.props.events}/>
        </div>
      );
    }
  }
  

  function Categories(props) {
    return (
      <div id="categories">
        <h3>Catégories</h3>
        {props.categories.map((item) => <p onClick={() => props.clickHandler(`${item}`)}>{item}</p>)}
      </div>
    );
  }

  
  function Search(props) {
    return (
      <div id="search">
        <div>
          <input type="text"></input>
          <button onClick={props.clickHandler}>rechercher</button>
          <span></span>
        </div>
      </div>
    );
  }


  function EventList(props) {
    return (
      <div id="eventsList">
        {props.events.map((item) => <ItemEvent event = {item.event} />)}
      </div>
    );
  }


  function ItemEvent(props) {
    return (
      <div className="itemEvent">
          <span>{props.event.catg}</span> -
          <span> {props.event.date}</span> -
          <span> {props.event.titre}</span>
      </div>
    );
  }

export default Home;
