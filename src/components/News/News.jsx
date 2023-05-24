import React,{useContext, useEffect, useState}from 'react'
import './news.scss'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import { db } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import { doc, onSnapshot } from "firebase/firestore";
import {  getDoc } from "firebase/firestore";
import { auth } from 'firebase/auth'
import Time from './Time'


const News = () => {

  const {currentUser} = useContext(AuthContext);
  const [error, setError] = useState(false);
  const docRef = doc(db, 'plates', currentUser.uid)
  
  const [plate, setPlate] = useState();
  
  useEffect(() => {
    onSnapshot(docRef, (doc) =>{
      console.log(doc.data(), doc.id)
      setPlate(doc.data().plates)
     })
   
  })

  
   
  return (
    <div className='news'>
      <div className="wrapper">
        <div className="welcone">
          <h1>Witaj <span>{currentUser.displayName}</span></h1>
            <h3>Twoja rejestracja to: <span>{(plate  ? plate : 'Uzupełnij rejestracje')}</span></h3>
            
        </div>
      <div className="top">
      {/**<FeaturedInfo/> */}
      <Time/>
      </div>
    </div>
  </div>
  )
}

export default News