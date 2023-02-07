/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg',
    arthor: 'Prince Harry The Duke of Sussex',
    bookname: 'Spare',
    price: '$9.99',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL254_SR254,254_.jpg',
    arthor: 'Alice Schertle', bookname: "Little Blue Truck's Valentine ", price: '8.99',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 7,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 8,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL254_SR254,254_.jpg',
    bookname: 'It Ends with Us: A Novel (1)',
    arthor: 'Colleen Hoover',
    price: '$9.99'
  },
  {
    id: 9,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg',
    arthor: 'Prince Harry The Duke of Sussex',
    bookname: 'Spare',
    price: '$9.99',
  },
  {
    id: 10,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg',
    arthor: 'Prince Harry The Duke of Sussex',
    bookname: 'Spare',
    price: '$9.99',
  },
  {
    id: 11,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg',
    arthor: 'Prince Harry The Duke of Sussex',
    bookname: 'Spare',
    price: '$9.99',
  }
];



function Booklist() {
  return (
    <section className='list'>
      {
        books.map((book) => {
          //const { img, arthor, bookname, price } = book;
          return (
            <Book key={book.id} book={book}></Book>
          );
        })
      }

    </section>

  );
}
const Book = (props) => {
  const { img, arthor, bookname, price } = props.book;
  return (
    <article>
      <img src={img}></img>
      <h1>{bookname}</h1>
      <h4>{arthor}</h4>
      <p>{price}</p>
    </article>
  );
};



ReactDOM.render(<Booklist></Booklist>, document.getElementById('root'));
