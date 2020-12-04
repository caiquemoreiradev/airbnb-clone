import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import SearchPage from './components/SearchPage';
import SearchRooms from './components/SearchRooms';

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={SearchPage} />
            <Route path='/page-results' component={SearchRooms} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;