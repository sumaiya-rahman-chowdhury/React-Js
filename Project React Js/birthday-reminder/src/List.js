import React from 'react';

const List = ({ people, removePerson }) => {


  return (
    <>

      {
        people.map((person) => {
          const { id, age, name, image } = person;
          return (
            <article key={id} className='person'>
              <img src={image} alt={name}></img>
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
                <button className='btn2' onClick={() => removePerson(id)} >remove</button>
              </div>
            </article>
          )

        })
      }
    </>
  );

};

export default List;
