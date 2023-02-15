import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `New(${value})`;
  });
  return (<><h2>{value}</h2>
  <button className='btn' onClick={()=>setValue(value
    +1)}>click me</button>
  </>);
};

export default UseEffectBasics;
