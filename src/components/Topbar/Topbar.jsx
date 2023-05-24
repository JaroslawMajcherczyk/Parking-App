import React, { useState, useContext} from 'react'
import './topbar.scss'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'


const Topbar = () => {
 
const [error, setError] = useState(false);
const {dispatch} = useContext(AuthContext);


const handler = (e) =>{
e.preventDefault();


  signOut(auth).then(() => {
    console.log('out')
    dispatch({type:"LOGOUT", payload:null});
    
    }).catch(() => {
      setError(true)
  });

} 
  

  
  return (
    <div className='topbar'>
    <div className="wrapper">
        <div className="left">
        <span className='logo'>PARK-APP</span>
        </div>
        <div className="right">
          <button  
            onClick={handler}>Wyloguj</button>
            {error && <span>nie działa</span>}
        </div>
    </div>
    </div>
  )
}

export default Topbar