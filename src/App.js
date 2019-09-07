import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Button } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>App page</h1>
        <Button variant="primary">Primary</Button>
      </div>
    </Router>
  );
}

export default App;
