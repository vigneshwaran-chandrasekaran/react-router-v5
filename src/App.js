import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import Common from './pages/Common';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/todo' exact component={Todos} />
          <Route path='/todo/:id' component={Todo} />
          <Route path='/contact' component={Contact} />
          {/* react router v5 feature array of routes */}
          <Route path={["/common-one", "/common-two"]} component={Common} />
          {/* Pass default param to route */}
          <Route
            path='/dashboard'
            render={(props) => <Dashboard {...props} isAuthed={true} name='vigneshwaran' place='chennai' />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
