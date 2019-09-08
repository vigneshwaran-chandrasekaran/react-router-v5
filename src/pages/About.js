import React, { useState, useEffect } from 'react';

export default function About() {

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const items = await data.json();

        console.log({ items });

    };

    return (
        <div>
            <h1>About page</h1>
        </div>
    )
}
