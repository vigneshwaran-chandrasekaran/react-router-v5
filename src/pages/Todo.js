import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export default function Todo({ match }) {
  /**
   * new way get id from url
   */
  let { id } = useParams();

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  console.log({ path });
  console.log({ url });

  /**
   * props.match.params.id === match.params.id === id
   * hereafter no need to user match.params.id to get url :slug
   */

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  /**
   * old way get id from url
   */
  useEffect(() => {
    console.log("Id changes");
    fetchTodo();
  }, [match.params.id]);

  useEffect(() => {
    console.log("always call");
  });

  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${match.params.id}`
    );

    const todo = await data.json();

    setTodo(todo);
  };

  return (
    <div>
      <h1>Todo page</h1>
      <p>
        {match.params.id} - {todo.id} - {todo.title}
      </p>
      <p>{id}</p>
    </div>
  );
}
