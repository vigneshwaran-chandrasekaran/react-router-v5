import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home pages starts</h1>
      <p>{process.env.REACT_APP_NAME}</p>
      <h1>Home pages ends</h1>
    </div>
  );
}
