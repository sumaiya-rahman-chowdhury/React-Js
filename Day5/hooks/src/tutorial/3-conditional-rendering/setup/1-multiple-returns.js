import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isloading, setisLoadin] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('default user')

  /* const getUser = async() => {

    const  response= await fetch(url);
    const users = await response.json();
    setUser(users);

  }
  useEffect(()=>{
    getUser();
  },[]); */
  

  useEffect(() => {
    setisLoadin(true);
    fetch(url)
    .then((resp) =>{
      if(resp.status>=200&&resp.status<=299)
      {
        return resp.json();
      }
      else
      {
        setisLoadin(false)
        setError(true)
        throw new Error(resp.statusText);
      }
      
    })
    .then((user)=> {
      const {login} = user;
      setUser(login)
      setisLoadin(false)
    })
    .catch((error)=>console.log(error));
  },[]);

  if (isloading) {
    return (
      <>
        <h2>Loading....</h2>
      </>
    );
  }
  if (isError) {
    return (
      <h1>Error....</h1>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
