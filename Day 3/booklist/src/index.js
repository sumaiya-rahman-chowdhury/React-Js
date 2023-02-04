/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Booklist() {
  return (
    <section className='list'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>

  );
}
const arthor = 'Prince Harry The Duke of Sussex';
const bookname = 'Spare';
const Book = () => {
  return <article>
    <img src='https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg'/>
    <h1 style={{letterSpacing:'0.7rem'}}>{bookname}</h1>
    <h4>{arthor}</h4>
  </article>
}

ReactDOM.render(<Booklist></Booklist>, document.getElementById('root'));
