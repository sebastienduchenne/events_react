import React from 'react';


class AddEvent extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        title: undefined,
        date: undefined,
      };
  
      this.handleSubmit = this.handleSubmit.bind(this)
      this.titleOnChange = this.titleOnChange.bind(this)
      this.dateOnChange = this.dateOnChange.bind(this)
    }
    titleOnChange(event) { this.setState({title: event.target.value}); }
    dateOnChange(event) { this.setState({date: event.target.value}); }
    handleSubmit(event) {
      console.log(this.state.title)
      console.log(this.state.date)
      event.preventDefault();
      this.props.addEvent({ "titre":this.state.title, "date":this.state.date, "catg":"Cinéma" })
    }
    render() {
      return (
        <div>
          <h3>Ajouter un évènement</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              Titre :
              <input 
                type="text" 
                name="titre" 
                value={this.state.title}
                onChange={this.titleOnChange}/>
            </div>
            <div>
              Date :
              <input 
                type="text" 
                name="date" 
                value={this.state.date}
                onChange={this.dateOnChange}/>
            </div>
            <div>
              <button onClick={this.handleSubmit}>Valider</button>
            </div>
          </form>
        </div>
      );
    }
  }

export default AddEvent;
