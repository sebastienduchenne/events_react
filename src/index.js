import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

/*
ReactDOM.render(   
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "addEvent" component = {AddEvent} />
            <Route path = "addCatg" component = {AddCatg} />
        </Route>
    </Router>, 
    document.getElementById('root'));
*/