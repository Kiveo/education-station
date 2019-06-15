import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoRoute from './components/nav/NoRoute';
import Home from './components/nav/Home';
import Schools from './containers/Schools';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schools" component={Schools} />
        <Route component={NoRoute} />
      </Switch>
    </Router>
  );
}
 
export default App;