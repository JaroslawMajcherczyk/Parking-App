import React, { useContext, useEffect,  useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {  doc, onSnapshot} from 'firebase/firestore';
import { db } from '../../firebase';





const Time = () => {
    const {currentUser} = useContext(AuthContext);
   // const actRef = doc(db, 'active', currentUser.uid)
    const [act, setAct] = useState();
    const ref = useRef(0)

    useEffect(() => {
         onSnapshot(doc(db, 'active', currentUser.uid), (doc) =>{
          doc.exists() && setAct(doc.data().isActive);
          
        }) ;
           
         }, [currentUser.uid]);
         
      
   
    console.log(act)
      
  

  return (
    <div> time

        <div><span>{act}</span></div>
        
    </div>
    
  )
}

export default Time