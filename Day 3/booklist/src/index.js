import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return <article>
    <Image/>
    <Title/>
      <Arthor/>
  </article>
}
const Image = () => {
return (
  <img src='https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL127_SR127,127_.jpg'/>
);
}
const Title = () => <h1>Spare</h1>
const Arthor = () => <h4> Prince Harry The Duke of Sussex</h4>
  ReactDOM.render(<Booklist></Booklist>, document.getElementById('root'));
