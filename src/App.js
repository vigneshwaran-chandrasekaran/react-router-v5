import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todos from './pages/Todos';
import Common from './pages/Common';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import NotFound from './pages/NotFound';
import Protected from './pages/Protected';

import { AuthButton, PrivateRoute, fakeAuth } from './shared/auth';

import './App.css';


class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button className='btn btn-success' onClick={this.login}>Log in</button>
      </div>
    );
  }
}

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
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <PrivateRoute path="/private/:id?" component={Protected} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
