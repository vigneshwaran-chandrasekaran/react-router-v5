import React, { useState } from 'react';
import { Prompt } from 'react-router'

function Contact() {
  const [name, setName] = useState('');

  function handleOnChange(e) {
    setName(e.target.value);
    console.log(!name);
    console.log(!!name);
  }
  return (
    <div>
      {/* this is multiple options available in Prompt,
      we can use any one according for our need,
      if we use multiple Prompt last one will be used
      */}
      <Prompt message="Are you sure you want to leave?" />
      <Prompt
        when={!!name}
        message="Are you sure you want to leave this page?"
      />
      <Prompt
        when={!!name}
        message={(location) => `Are you sure you want to ${location.pathname}`}
      />
      <Prompt
        message={location =>
          location.pathname.startsWith("/dashboard")
            ? true
            : `Are you sure you want to go to ${location.pathname}?`
        }
      />
      <h1>Contact page</h1>
      <p>This page is implemented <strong>Prompt</strong> concept</p>
      <p>If you type anything in below textbox and try to navigate any other route(page) except Dashboard page,
        the Prompt will invoke
      </p>
      <input
        value={name}
        onChange={handleOnChange}
        placeholder='Name' />
      <p>{name}</p>
    </div>
  )
}

export default Contact;
