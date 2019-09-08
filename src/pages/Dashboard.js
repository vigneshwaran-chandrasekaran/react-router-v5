import React, { useEffect } from 'react';

export default function Dashboard(props) {

    useEffect(() => {
        console.log({ props });
    }, []);

    return (
        <div>
            Dashboard - {props.name} {props.place}
        </div>
    )
}
