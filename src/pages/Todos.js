import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Todos() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [todos, setTodos] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

        const todos = await data.json();

        console.log({ todos });
        setTodos(todos);
    };

    return (
        <div>
            <h1>Todos page</h1>
            {todos.map(todo => (
                <p key={todo.id}>
                    <Link to={`/todo/${todo.id}`}>{todo.id} - {todo.title}</Link>
                </p>
            ))}
        </div>
    )
}
