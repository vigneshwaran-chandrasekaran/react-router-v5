import React, { useState, useEffect } from 'react';

export default function Todo({ match }) {

    useEffect(() => {
        fetchTodo();
        console.log({ match });
    }, []);

    const [todo, setTodo] = useState([]);

    const fetchTodo = async () => {

        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`);

        const todo = await data.json();

        console.log({ todo });

        setTodo(todo);
    };

    return (
        <div>
            <h1>Todo page</h1>
            <p>{todo.id} - {todo.title}</p>
        </div>
    )
}
