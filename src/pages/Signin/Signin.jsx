import React from 'react'
import './signin.scss'
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db } from '../../firebase';
import { Link } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 

const Signin = () => {

    const [error, setError] = useState(false);
    const [newUser, setNewUser] = useState(false);

const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

   try{
    //user create
    const res = await createUserWithEmailAndPassword(auth, email, password)
         .then(setNewUser(true)) 
    try{
      //upload profile
      await updateProfile(res.user,{
        displayName,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

    }catch(error) {
      setError(true);
      
    };

     } catch(error) {
            setError(true);
          };     
};



  return (
    <div className='signin'>
    <div className="top">
        <h1>Jesteś tu pierwszy raz?</h1>
        <span>Zarejestruj się</span>
    </div>
    <div className="bottom">
        <form onSubmit={handleSubmit}>
            <input required type="text" placeholder='name'/>
            <input required  type="emial" placeholder='email'/>
            <input required  type="password" placeholder='password'/>
            <button>Potwierdź</button>
            {newUser && <span>Konoto zostało założone</span>}
            {error && <span>cos poszło nie tak</span>}
        </form>
        <p>Masz już konto? <Link className='link text-color' to='/login'>Zaloguj się!</Link></p>
    </div>
    </div>
  )
}

export default Signin