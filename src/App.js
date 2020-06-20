import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import Login from './Containers/Login';
import { store } from './store'
import Tasks from './Containers/Task';

const history = createHistory();
function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Router history={history}>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/tasks" component={Tasks} />
                </Router>
            </div>
        </Provider>
    );
}

export default App;
