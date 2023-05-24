import React from 'react'
import './joke.scss'
import { useState, useEffect } from "react";


const Joke = () => {

    const [joke, setJoke] = useState([1]);
    

    const fetchJokeData = () => {
        fetch("https://api.chucknorris.io/jokes/random")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setJoke(data)
          })
      }

  
    
    //useEffect(() => {
      //  fetchJokeData()
     // }, [])
     

    
    function handleClick() {
        fetchJokeData();    
        }
      console.log(fetchJokeData);
      
  return (
    <div className='joke'>
        <h1>Jokes</h1>
        <span>{joke.id}</span>
         {joke.value}
        <button onClick={handleClick}>Change Joke</button>
        
    </div>
    
  )
};

export default Joke;