import React from 'react';
import {Component} from 'react';
import './App.css';
import {BookListContainer} from './book-list/book-list';
import {Login} from './login/login';
import {BookDetailContainer} from './book-detail/book-detail';
import {BookEdit} from './book-edit/book-edit';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={BookListContainer}/>
            <Route path='/list' component={BookListContainer}/>
            <Route path='/grid' component={BookListContainer}/>
            <Route path='/login' component={Login}/>
            <Route path='/book-detail/:id' component={BookDetailContainer}/>
            <Route path='/book-edit/:id' component={BookEdit}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
