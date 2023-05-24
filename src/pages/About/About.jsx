import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className='about'>
      <div className="wrapper">
          <div className="left">
             <div className="item">
              
              <img src="./park.png" alt="" />
            </div>
          </div>

         <div className="right">
          <div className="item">
          <h1>Park-App </h1>
          <h3>Aplikacja do parkowania</h3>
          <span>Główną zaletą aplikacji to możliwość ciagłego monitorowania 
            czasu przebywania urzytkownika na parkingu oraz płatność online
              </span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default About