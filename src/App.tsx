import React from 'react';
import Nav from './components/Nav'
import Home from './views/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { RuleTable } from './components/RuleTable';
import { SearchTable } from './components/SearchTable';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rule:rule" exact component={RuleTable}/>
        <Route path="/search:searchTerm" exact component={SearchTable}/>
      </Switch>
    </Router>
  );
}

export default App;
