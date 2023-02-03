import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Greeting(){
  return(
<div>
  
  <h1 className='h-1'>Nested Component</h1>
  <Person></Person>
  <Message/>
  <p>This is Loading....</p>
</div>
  );
}
const Person = () => 
  <h2>This is John Smith</h2>

const Message =() =>
  {
  return(
  <h3>This is Message</h3>
  );
}

ReactDOM.render(<Greeting/>,document.getElementById('root'));


