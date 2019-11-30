import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Todo from "./Todo";

export default function Todos({ match }) {
  let { path, url } = useRouteMatch();

  console.log({ path }); // old match.path
  console.log({ url }); // old match.url

  useEffect(() => {
    console.log({ match });
    fetchItems();
  }, []);

  const [todos, setTodos] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

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
            <Link to={`${match.url}/${id}`}>
              {id} - {title}
            </Link>
            <br />
            <Link to={`${url}/${id}`}>
              {id} - {title}
            </Link>
          </div>
        ))}
        <hr />
      </div>
      <div>
        <Route exact path={`${match.path}/:id`} component={Todo} />
        <Route exact path={`${path}/:id`} component={Todo} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a todo.</h3>}
        />
      </div>
    </div>
  );
}
