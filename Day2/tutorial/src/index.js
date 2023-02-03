import React from 'react';
import ReactDOM from 'react-dom';
//function Greeting() {
  //return <h1>
    //This is Sumaiya,This is my first Component

 // </h1>;
//}
const Greeting =()=>{
  return React.createElement('h1',{},'This is Sumaiya');
}
ReactDOM.render(<Greeting />, document.getElementById('root'));