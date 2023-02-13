import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset =()=>{
setValue(0);
  }
  return (
    <><section style={{ margin: '4rem 0', backgroundColor: 'lightblue'}}>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value
        - 1)} >decrement</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={() => setValue(value + 1
      )}>increment</button>
    </section>

    </>
  );
};

export default UseStateCounter;
