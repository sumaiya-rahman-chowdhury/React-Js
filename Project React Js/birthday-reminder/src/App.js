import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson}></List>
        <button className='btn1' onClick={()=>{setPeople([])}}>clear all</button>
      </section>
    </main>
  );
}

export default App;
