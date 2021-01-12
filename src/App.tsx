import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './page/Home';

const App: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
  );
}

export default App;
