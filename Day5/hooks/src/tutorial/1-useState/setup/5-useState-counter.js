import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset =()=>{
setValue(0);
  }
  const complexIncrease = () =>
  {
    setTimeout (()=>{
      setValue((prevStatte)=>{
        return prevStatte+1;
      });
    },2000);
  };
  return (
    <><section style={{ margin: '4rem 0', backgroundColor: 'lightblue'}}>
      <h1>Regular Counter</h1>
      <h2>{value}</h2>
      <button className='btn' style={{marginBottom:'0.8rem'}} onClick={() => setValue(value
        - 1)} >decrement</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={() => setValue(value + 1
      )}>increment</button>

      <h1>Complex Counter</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={complexIncrease} style={{marginBottom:'0.8rem'}}>increment Later</button>
    </section>

    </>
  );
};

export default UseStateCounter;
