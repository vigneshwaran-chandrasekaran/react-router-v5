import React, { useState } from 'react';
import { Redirect } from 'react-router';

export default function RedirectPage() {
    const [state, setState] = useState(0);
    function handleOnClick() {
        setState(state + 1);
    }

    function checkRedirect() {
        console.log(state < 5);
        return state < 5;
    }

    return (
        <div>
            <p>On fifth time button click page will direct to dashboard Page using "Redirect"</p>
            {checkRedirect() ?
                <button className='btn btn-warning' onClick={handleOnClick}>Click me {state}</button> :
                <Redirect to="/dashboard" />
            }

        </div>
    )
}
