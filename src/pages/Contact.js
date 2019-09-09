import React, { useState } from 'react';
import { Prompt } from 'react-router'

function Contact() {
  const [name, setName] = useState('');

  function handleOnChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <Prompt
        when={!!name}
        message="Are you sure you want to leave this page?"
      />
      <h1>Contact page</h1>
      <input
        value={name}
        onChange={handleOnChange}
        placeholder='Name' />
      <p>{name}</p>
    </div>
  )
}

export default Contact;
