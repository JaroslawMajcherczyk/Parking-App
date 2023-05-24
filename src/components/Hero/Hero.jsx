import React from 'react'
import './hero.scss'



export const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <div className="item">
          <h1>Wygodne parkowanie za pomocą telefonu.</h1>
          <span>Koniec z szukaniem parkomatów, drobnych
i zastanawiania się nad czasem parkowania.</span>
        </div>
      </div>
      <div className="right">
        <div className="item">
        <img src="./park.png" alt="assda" />
        </div>
      </div>
    </div>
  )
}

export default Hero;