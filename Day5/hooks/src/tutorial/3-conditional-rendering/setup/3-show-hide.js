import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => { setShow(!show) }}>show/hide</button>
      {show && <Item></Item>}
    </>
  );
};
const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',checkWidth);
   // 
   return(
    ()=>{
      window.removeEventListener('resize',checkWidth);
    }
   );
  });
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size :{width}</h2>
    </div>
  );
};

export default ShowHide;
