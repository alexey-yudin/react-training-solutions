import React from 'react';
import {Component} from 'react';
import './App.css';
import {BookList} from './book-list/book-list';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={BookList}/>
            <Route path='/list' component={BookList}/>
            <Route path='/grid' component={BookList}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
