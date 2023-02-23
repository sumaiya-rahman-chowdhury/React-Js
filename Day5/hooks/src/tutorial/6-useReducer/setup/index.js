import React, { useState, useReducer, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  if(action.type==='testing'){
return {
  ...state,people:data,isModalOpen:true,modalContent:'item added'
};
  }
return state;
};
const defaultState =  {
  people: data,
   isModalOpen : true,
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
      dispatch({type:'testing'});
    }
    // else {
    //   setShowModal(true);
    // }
    e.preventDefault();
  }
  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form className='form' onSubmit={handlesubmit}>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}>

        </input>
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person) => {
      return (
      <div key={person.id}>
        <h4>{person.name}</h4>
      </div>);
    })}
  </>;
};

export default Index;
