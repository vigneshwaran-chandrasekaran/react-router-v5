import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home pages</h1>
      <p>{process.env.REACT_APP_NAME}</p>
    </div>
  );
}
