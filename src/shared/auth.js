import React from 'react';
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';

export const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button className='btn btn-danger'
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
                <p className="bg-danger text-white">You are not logged in.</p>
            )
);

export function PrivateRoute({ component: Component, ...rest }) {
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
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
            }
        />
    );
}


export const fakeAuth = {
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