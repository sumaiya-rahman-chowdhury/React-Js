import React from 'react'
const Book = (props) => {
    const { img, arthor, bookname, price } = props.book;
    const clickHandler = () => {
      alert('Add To Cart');
    }
    const complxex = (arthor) => {
      console.log(arthor);
    }
    return (
      <article onMouseMove={()=>{
        
        console.log(bookname,arthor,price);
       
      }}>
        <img src={img}></img>
        <h1>{bookname}</h1>
        <h4>{arthor}</h4>
        <p>{price}</p>
        <button type='button' onClick={clickHandler}>Add To Cart</button>
        <button type='button' onClick={()=>complxex(arthor)}>more cmplx ex</button>
      </article>
    );
  };
  export default Book