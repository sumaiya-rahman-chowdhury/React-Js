/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg',
  arthor: 'Prince Harry The Duke of Sussex', bookname: 'Spare', price: '$9.99'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg',
  arthor: 'Alice Schertle', bookname: "Little Blue Truck's Valentine ",price:'8.99'
}

function Booklist() {
  return (
    <section className='list'>
      <Book img={firstBook.img} bookname={firstBook.bookname} arthor={firstBook.arthor} price={firstBook.price} />
      <Book img={secondBook.img} bookname={secondBook.bookname}arthor={secondBook.arthor} price={secondBook.price}/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>

  );
}

const Book = (props) => {
  return (<article>
    <img src={props.img} />
    <h1>{props.bookname}</h1>
    <h4>{props.arthor}</h4>
    <p>{props.price}</p>

  </article>
  );
}

ReactDOM.render(<Booklist></Booklist>, document.getElementById('root'));
