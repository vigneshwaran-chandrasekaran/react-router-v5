import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Button } from 'react-bootstrap';
import Navigation from './components/Navigation';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <h1>App page</h1>
        <Button variant="primary">Primary</Button>
        <Route path='' component={About} />
      </div>
    </Router>
  );
}

export default App;
