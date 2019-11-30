import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Todo({ match }) {
  let { id } = useParams();

  useEffect(() => {
    console.log("Component did mount");
  }, []);

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
