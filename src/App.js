import React, { useState, Component } from 'react';
import './css/styles.scss';
import store from './Store';
import { Provider } from 'react-redux';
import Home from './Pages/home';
import Feeds from './Pages/feeds';
import { routes as ROUTES } from './Routes';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages';

class App extends Component {

  render () {

    return (
      <div>
        <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path={ROUTES.home} component={Pages} />
                  <Route path={ROUTES.feeds} component={Pages} />
              </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}


export default App;
