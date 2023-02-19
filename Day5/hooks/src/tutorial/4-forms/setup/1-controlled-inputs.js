import React, { useEffect, useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstname: firstname, email: email
      };
      setPeople((people) => {
        return [...people, person];
      });
      console.log('submit the form');
      setFirstname('');
      setEmail('');
    }
    else {
      console.log('empty');
    }
  };
  useEffect(() => {
    document.title = "Form";
  });
  return (
  <>
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
          <button className='form button' onClick={()=>setPeople([])}>remove</button>

      </form>
      {
        people.map((person, index) => {
          const { id, firstname, email } = person;
          return (
            <div className='item'>
              <h4>{firstname}</h4>
              <p>{email}</p>
            </div>
          );
        })}
    </article>
  </>
  );
};

export default ControlledInputs;
