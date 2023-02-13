import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'Sumaiya',
    age:24,
    message:'Rihanna Superbowl'
  });
  const NewMessage = () =>{
    setPerson({...person,message:'Jay Z Best rapper'})
  }
  
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={NewMessage}>New Message</button>
    </>
  );
};

export default UseStateObject;
