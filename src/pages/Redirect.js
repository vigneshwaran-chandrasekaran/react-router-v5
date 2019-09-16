import React, { useState } from 'react';
import { Redirect } from 'react-router';

export default function RedirectPage() {
    const [state, setState] = useState(0);

    function handleOnClick() {
        setState(state + 1);
    }

    return (
        <div>
            <p>On fifth time button click page will direct to dashboard Page using "Redirect"</p>
            {(state >= 5) && <Redirect to="/dashboard" />}
            <button className='btn btn-warning' onClick={handleOnClick}>Click me {state}</button>
        </div>
    )
}
