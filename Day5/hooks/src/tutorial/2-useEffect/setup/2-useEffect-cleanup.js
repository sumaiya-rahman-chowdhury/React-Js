import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  const[size2,setSize2] = useState(window.innerHeight);
 const checkSize = () =>
 {
  setSize(window.innerWidth);
 }
 const checkSize2 = () =>
 {
  setSize2(window.innerHeight);
 }
useEffect(()=>{
  window.addEventListener('resize',checkSize);
  window.removeEventListener('resize',checkSize);
});
useEffect(()=>{
  window.addEventListener('resize',checkSize2);
  window.removeEventListener('resize',checkSize2);
});
  return (
    <>
    <h1>Window Size : </h1>
    <h2>width : {size}</h2>
    <h2>height : {size2}</h2>
    </>
  );
};

export default UseEffectCleanup;
