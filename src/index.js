import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import SearchRes from './components/SearchRes'
import Details from './components/Details'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='search/:term' component={SearchRes}/>
      <Route path ='details/:symbol' component={Details}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
