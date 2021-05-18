import React from 'react';
import './App.css';
import NavBar from './Componets/NavBar';
import NewsApp from './Componets/NewsApp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetHistory from './Componets/GetHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <NewsApp />
          </Route>
          <Route path="/search">
            <NewsApp />
          </Route>
          <Route path="/history">
            <GetHistory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
