import React from 'react';
import { Redirect } from "react-router-dom";


class AddEvent extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        title: '',
        date: '',
        redirect: null
      };
  
      this.cancel = this.cancel.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.titleOnChange = this.titleOnChange.bind(this)
      this.dateOnChange = this.dateOnChange.bind(this)
    }
    titleOnChange(event) { this.setState({title: event.target.value}); }
    dateOnChange(event) { this.setState({date: event.target.value}); }
    cancel(event) { this.setState({ redirect: "/home" }); }
    handleSubmit(event) {
      alert('Le nom a été soumis : '+this.state.value);
      console.log(this.state.title)
      console.log(this.state.date)
      event.preventDefault();
      this.setState({ redirect: "/home" });
    }
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
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
              <button onClick={this.cancel}>Annuler</button>
              <input type="submit" value="Valider" />
            </div>
          </form>
        </div>
      );
    }
  }

export default AddEvent;
