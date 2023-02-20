import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) =>
  {
e.preventDefault();

  }
  useEffect(()=>{
    
  });
  return <form className='form' onSubmit={handleSubmit} >
    <div>
      <h1>UseRef React-Js</h1>
      <input type='text'ref={refContainer}></input>
      <button type='submit'> submit</button>
    </div>
    </form>
};

export default UseRefBasics;
