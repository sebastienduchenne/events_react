import React from 'react';


class DetailEvent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.event.titre,
      date: this.props.event.date,
      categorie: this.props.event.catg,
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleOnChange = this.titleOnChange.bind(this)
    this.dateOnChange = this.dateOnChange.bind(this)
    this.catgOnChange = this.catgOnChange.bind(this)
  }
  titleOnChange(event) { this.setState({title: event.target.value}); }
  dateOnChange(event) { this.setState({date: event.target.value}); }
  catgOnChange(event) { this.setState({categorie: event.target.value}); }
  handleSubmit(event) {
    console.log(this.state.title)
    console.log(this.state.date)
    event.preventDefault();
    if(this.state.title === undefined || this.state.date === undefined){
      return
    }
    this.props.confirm({ "titre":this.state.title, "date":this.state.date, "catg":"Cinéma" })
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form>
          <div>
            Titre :
            <input 
              type="text" 
              name="titre" 
              value={this.state.title}
              onChange={this.titleOnChange}
              required/>
          </div>
          <div>
            Date :
            <input 
              type="text" 
              name="date" 
              value={this.state.date}
              onChange={this.dateOnChange}
              required/>
          </div>
          <div>
            Catégorie :
            <input 
              type="text" 
              name="date" 
              value={this.state.categorie}
              onChange={this.catgOnChange}
              required/>
          </div>
          <div>
            <button onClick={this.handleSubmit}>Valider</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailEvent;
