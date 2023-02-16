import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (<>
    <h1>{text || 'john doe'}</h1>
    <button className='btn' onClick={() => setError(!isError)}> toggle error</button>
    {text && <h1>hello world</h1>}
    {isError && <h1>Error...</h1>}
    {isError ? (<h1>there is an error ...</h1>) : (<div>
      <h1>there is no error ...</h1>
    </div>) }
    {/* {expression ? ():()} */}
  </>
  );
};

export default ShortCircuit;
