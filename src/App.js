import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
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
import './App.css';


function Protected() {
  return <h3>Protected</h3>;
}

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
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


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
