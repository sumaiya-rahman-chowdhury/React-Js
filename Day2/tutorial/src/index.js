import React from 'react';
import ReactDOM from 'react-dom';
//function Greeting() {
//return <h1>
//This is Sumaiya,This is my first Component

// </h1>;
//}
//const Greeting =()=>{
// return React.createElement('h1',{},'This is Sumaiya');
//}
function Greeting()
{
 return (
 <div className=''>
 <h1>This is Loadng</h1>
 <ul><li><a href='#'>Loading..</a></li></ul>
 <img src='logo512.png'alt='' width='100%' height='600px'/>
 <input type='text' name='' id='' placeholder='Name'></input>
</div>
 );
}
//const Greeting = () => {
 // return React.createElement('div', {}, React.createElement('h1', {}, 'Loading......'));
//}
ReactDOM.render(<Greeting />, document.getElementById('root'));