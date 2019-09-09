import React from 'react';
import Button from 'react-bootstrap/Button'

export default function About(props) {
    function handleOnClick() {
        console.log({ props });
        props.history.push('/todo');
    }

    return (
        <div>
            <h1>About page</h1>
            <Button variant="primary" onClick={handleOnClick}>Click here to programmatic navigation to todo page</Button>
        </div>
    )
}
