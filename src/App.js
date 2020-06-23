import React from 'react';
import createHistory from "history/createBrowserHistory";
import './App.css';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Login from './Containers/Login';
import {store} from './store'
import Tasks from './Containers/Task';

const history = createHistory()
function App() {
  return (
    <Provider store={store} >
      <Router history={history} >
        <Route exact path="/" component={Login} />
        <Route exact path="/tasks" component={Tasks} />
      </Router>
    </Provider>
  );
}

export default App;
