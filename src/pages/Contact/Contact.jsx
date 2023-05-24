import React from 'react'
import './contact.scss'
//import Map from '../../components/Map/Map'


const Contact = () => {

//  const location = {
   // address: '1600 Amphitheatre Parkway, Mountain View, california.',
  //  lat: 37.42216,
  //  lng: -122.08427,
//  }

  return (
    <div className='contact'>
    <div className="wrapper">
      <div className="top">
        <div className="location">
          <h1>Znajdujemy sie tu</h1>
        
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <h4>telefon</h4>
          <span>+48-121-121-121</span>
        </div>
        <div className="item">
        <h4>telefon</h4>
          <span>+48-121-121-121</span>
        </div>
        <div className="item">
        <h4>telefon</h4>
          <span>+48-121-121-121</span>
        </div>
        <div className="item">
        <h4>telefon</h4>
        <span>+48-121-121-121</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact