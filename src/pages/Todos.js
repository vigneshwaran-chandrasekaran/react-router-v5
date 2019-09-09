import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import { Route } from 'react-router-dom';

export default function Todos({ match }) {

    useEffect(() => {
        console.log({ match });
        fetchItems();
    }, []);

    const [todos, setTodos] = useState([]);

    const fetchItems = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        const todos = await data.json();

        setTodos(todos);
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <div>
                <h1>Todos page</h1>
                <hr />
                {todos.map(({ id, title }) => (
                    <div key={id}>
                        <Link to={`${match.url}/${id}`}>{id} - {title}</Link>
                    </div>
                ))}
                <hr />
            </div>
            <div>
                <Route exact path={`${match.path}/:id`} component={Todo} />
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a todo.</h3>}
                />
            </div>
        </div>
    )
}
