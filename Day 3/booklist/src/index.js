/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books'
import Book from './Book'


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




ReactDOM.render(<Booklist></Booklist>, document.getElementById('root'));
