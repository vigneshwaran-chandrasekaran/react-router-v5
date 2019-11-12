import React, { useState, useEffect } from "react";

export default function Items(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log({ props });
    // const userName = props.location.search
  }, []);

  function handleChange(event) {
    const data = event.target.value;
    setState(data);
    props.history.push({
      search: `?userName=${data}`
    });
  }

  function handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();
  }
  return (
    <div>
      <p>Items ww {props.data ? props.data.category : ""}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            value={state}
            onChange={handleChange}
          />
        </label>
        <div>
          <input className="btn btn-success" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
