import React, { Component } from 'react'
import { fakeAuth } from '../shared/auth';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
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
