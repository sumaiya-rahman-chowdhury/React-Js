import React, { useState, useReducer, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {

};
const defaultState =  {
  people: [],
   isModalOpen : false,
    modalContent: 'hello world'
};
const Index = () => {
  useEffect(() => {
    document.title = `useReducer`;
  });
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultState);
  const handlesubmit = (e) => {
    if (name) {
      
    }
    // else {
    //   setShowModal(true);
    // }
    e.preventDefault();
  }
  return <>
    {state.isModalOpen && <Modal></Modal>}
    <form className='form' onSubmit={handlesubmit}>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}>

        </input>
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person) => {
      return <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    })}
  </>;
};

export default Index;
