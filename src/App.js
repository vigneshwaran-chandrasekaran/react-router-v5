import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './components/Login';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todos from './pages/Todos';
import Common from './pages/Common';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import NotFound from './pages/NotFound';
import Protected from './pages/Protected';
import Redirect from './pages/Redirect';
import Items from './pages/Items';
import { AuthButton, PrivateRoute } from './shared/auth';
import './App.css';

const cat = { category: 'food' }

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AuthButton />
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/todo' component={Todos} />
          <Route path='/topics' component={Topics} />
          <Route path='/contact' component={Contact} />
          {/* react router v5 feature array of routes */}
          <Route path={["/common-one", "/common-two"]} component={Common} />
          {/* Pass default param to route */}
          <Route
            path='/dashboard'
            render={(props) => <Dashboard {...props} isAuthed={true} name='vigneshwaran' place='chennai' />}
          />
          <Route path='/redirect' component={Redirect} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <PrivateRoute path="/private/:id?" component={Protected} />
          <Route
            exact
            path='/items'
            component={Items}
          />
          <Route
            exact
            path='/items'
            render={() => (<div>List of Items</div>)}
          />
          <Route
            exact path='/items'
            render={props => <Items {...props} data={cat} />}
          />
          <Route children={props => <Items {...props} />} />
          <Route children={() => <Items />} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
