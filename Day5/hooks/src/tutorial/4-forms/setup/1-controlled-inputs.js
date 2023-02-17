import React, { useEffect, useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [people,setPeople]=useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.title = "Form";
  });
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstname'>Name : </label>
          <input type="text" id='firstname' name='firstname'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}></input>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email :</label>
          <input type='email' id='email' name='email'
            value={email} onChange={(e) => setEmail(e.target.value)}>

          </input>
        </div>
        <button type='submit' onClick={handleSubmit}>
          add person</button>

      </form>
    </article>
  </>;
};

export default ControlledInputs;
