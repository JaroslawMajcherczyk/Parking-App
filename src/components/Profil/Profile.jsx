import React, {useState, useContext, useEffect} from 'react'
import { AuthContext } from '../../context/AuthContext';
import './profile.scss'
import {auth, db} from '../../firebase'
import {doc, onSnapshot, setDoc } from 'firebase/firestore'



const Profile = () => {

  const {currentUser} = useContext(AuthContext);
  const [error, setError] = useState(false);
 
  const docRef = doc(db, 'plates', currentUser.uid)

  const [plate, setPlate] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    onSnapshot(docRef, (doc) =>{
     // console.log(doc.data(), doc.id)
      setPlate(doc.data().plates)
      setPhone(doc.data().phone)
     })
   
  })

  const handleUpdate = async (e)=>{
    e.preventDefault();
 
    const phone = e.target[0].value;
    const plates = e.target[1].value;
   
  
    try{
      //upload profile
      const ref = doc(db, "plates", auth.currentUser.uid);
      await setDoc(ref,  {
        uid: currentUser.uid,
        phone,
        plates
      })
      console.log("posło")
      
    }catch(error) {
      setError(true);
    };
    
    }
    


  return (
    <div className='profile'>
      <div className="wrapper">
        <div className="top">
          <h1>Twój profil
          {currentUser.displayName}
          </h1>
          
          <p>Jeśli nie jest zaktualizowany zrób to</p>
        </div>
        <div className="bottom">
          <form onSubmit={handleUpdate}>
            <span>Twoje Numery telefonu</span>
            {phone}
            <input type="phone" name="phone"  />
            <span>Numer tablicy rejestracyjnej</span>
            {plate}
            <input type="plate" name="plate"  />
            
            
            <button> Potwierdź dane</button>
          </form>

          {error && <span>Nie działa</span>}
          
        </div>
      </div>
    </div>
  )

}
export default Profile