import React from 'react';
import './Home.css';


class Home extends React.Component {
  constructor(props){
    super(props)
    this.displayCatg = this.displayCatg.bind(this)
  }
  displayCatg(event){

  }
  render() {
    return (
      <div className="app">
        <Categories 
          categories={this.props.categories} 
          clickHandler={this.displayCatg} />
        <Search 
          search={this.props.search} 
          searchOnChange={this.props.searchOnChange} />
        <EventList 
          eventsDisplayed={this.props.eventsDisplayed}
          editOnClick={this.props.editOnClick}
          deleteOnClick={this.props.deleteOnClick} />
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


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: undefined
    }
    this.searchOnChange = this.searchOnChange.bind(this);
  }

  searchOnChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return(
      <div id="search">
        <input 
          type="text"
          onChange={this.searchOnChange}></input>
        <button onClick={() => this.props.search(this.state.text)}>rechercher</button>
      </div>
    )
  }
}


function EventList(props) {
  return (
    <div id="eventsList">
      {props.eventsDisplayed.map((item) => <ItemEvent event = {item} editOnClick={props.editOnClick} deleteOnClick={props.deleteOnClick}/>)}
    </div>
  );
}


function ItemEvent(props) {
  return (
    <div className="itemEvent">
        <span>{props.event.catg}</span> -
        <span> {props.event.date}</span> -
        <span> {props.event.titre}</span>
        <button onClick={() => props.editOnClick(props.event.key)}>Editer</button>
        <button onClick={() => props.deleteOnClick(props.event.key)}>Supprimer</button>
    </div>
  );
}

export default Home;
