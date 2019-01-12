import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './components/Root';
import NotFound from './components/Error';
import Detail from './components/Detail';
import store from './store';
import SubRoute from './components/SubRoute';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => (<Root/>)}></Route>
            <Route path="/detail/:index" component={(match) => (<Detail route={match} />)}></Route>
            <Route path="/sub" component={(match) => (<SubRoute route={match} />)}></Route>
            <Route component={() => (<NotFound/>)}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;