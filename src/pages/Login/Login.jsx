import React, { useContext } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';




const Login = () => {
  
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

const handleSubmit = (e) =>{
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // loged in 
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload:user});
          navigate("/dashboard/news");
          
          // ...
        })
        .catch((error) => {
          setError(true);
          // ..
        });

};

return (
  <div className='login'>
    <div className="wrapper">
    <div className="top">
     <h1>Zaloguj się</h1>

     
   <div className="bottom">
       <form onSubmit={handleSubmit}>
        <span>Email</span>
           <input onChange={e=>setEmail(e.target.value)}  type="emial" placeholder='email'/>
           <span>Hasło</span>
           <input onChange={e=>setPassword(e.target.value)}  type="password" placeholder='password'/>
           <button>Potwierdź</button>
             {error && <span>Nieprawidłowe hasło lub mail</span>}
       </form>
       <p>Nie masz konto? <Link className='link text-color' to='/signin'>Zarejestruj się!</Link> </p>
   </div>
   </div>
  </div>
 
  </div>
)
}

export default Login