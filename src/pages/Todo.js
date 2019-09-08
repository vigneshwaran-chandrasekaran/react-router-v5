import React, { useState, useEffect } from 'react';

export default function Todo() {

    useEffect(() => {
        fetchTodo();
    }, []);

    const [todo, setTodo] = useState([]);

    const fetchTodo = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const todo = await data.json();

        console.log({ todo });
        setTodo(todo);
    };

    return (
        <div>
            <h1>Todo page</h1>
            <p>{todo.id}</p>
        </div>
    )
}
