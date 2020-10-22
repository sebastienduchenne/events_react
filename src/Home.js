import React from 'react';
import './Home.css';


class Home extends React.Component {
  constructor(props){
    super(props)
    this.search = this.search.bind(this)
    this.displayCatg = this.displayCatg.bind(this)
  }
  search(text) {
    this.props.clickHandler(text)
  }
  displayCatg(event){

  }
  render() {
    return (
      <div className="app">
        <Categories categories={this.props.categories} clickHandler={this.displayCatg}/>
        <Search clickHandler={this.search} />
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


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : undefined
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleClick(){
    this.props.clickHandler(this.state.text);  
  }

  render() {
    return(
      <div id="search">
        <input 
          type="text"
          onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>rechercher</button>
      </div>
    )
  }
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
        <span> {props.event.titre}</span> -
        <span>Edit</span> -
        <span>Sup</span>
    </div>
  );
}

export default Home;
