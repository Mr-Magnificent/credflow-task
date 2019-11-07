import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Course from './Pages/Course.jsx';
import Search from './Pages/Search.jsx';
import Index from './Pages/Index.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/search' component={Search} />
        <Route path='/course' component={Course} />
      </Switch>
    </div>
  );
}

export default App;
