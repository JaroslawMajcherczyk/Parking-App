import React, { useContext, useState} from 'react'
import {useRef,  useEffect } from "react";
import './camera.scss'
import Tesseract from 'tesseract.js';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';
import { Timestamp, doc, onSnapshot, setDoc } from 'firebase/firestore';



const Camera = () => {


    const videoRef = useRef(false);
    const photoRef = useRef(false);
    const [hasPhoto, setHasPhoto] = useState();
   
    const getVideo = () => {
     
      navigator.mediaDevices
      .getUserMedia({
        video: {width:320, height:240}})
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err =>{
          console.error(err);
        })
    }

    const takePhoto = () => {
      setHasPhoto(false);
      const  width = 320;
      const height = 240;
      
      let video = videoRef.current;
      let photo = photoRef.current;

      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext('2d');
      ctx.drawImage(video, 0, 0, width, height);
      setHasPhoto(true);
      //console.log(hasPhoto)
     
    }
    
  useEffect(() => {
    getVideo();
  }, [videoRef])


  // function getFoto (){
  //   if (photoRef.current)
  //    console.log("mamy zdjecie")
  //   else{
  //     console.log("nie ma zdjecia")
  //   }
  // }
 
  const {currentUser} = useContext(AuthContext);
  const docRef = doc(db, 'plates', currentUser.uid)
  const [plate, setPlate] = useState('');

  useEffect(() => {
    onSnapshot(docRef, (doc) =>{
      setPlate(doc.data().plates)
     })
  })


const [textToImage, setTextToImage] = useState('');

function getTextFromImage (){
  Tesseract.recognize(
          photoRef.current,
          'pol',
         // { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
          //console.log("siema");
          setTextToImage(text)
        })
}

// function itIsString(){
//   if (textToImage === String) {
//     console.log("prawda")
//   }else{
//     console.log("nie-prawda")
//   }

// }

// itIsString()
function getComper(){

  let str  = textToImage;
  var myarray = str.split('');
  myarray.pop();

  let str2  = plate;
  var myarray2 = str2.split('');
  if (JSON.stringify(myarray) === JSON.stringify(myarray2)) {
    console.log(true)
  }else
  console.log(false)

}  
getComper()



getTextFromImage ()




  

// async function sendComper(){
//   try{
//   const campare = await getComper();
//  // console.log(campare);
//   }catch{
//     if (campare === true) {
//    setDoc(doc(db, "new", currentUser.uid),{
//     // isActive: "isActive",
//      time: Timestamp.now(),
//    })
//   }
//    console.log("działa")
//   }
// }



  return (
    <div className="container">
    <div className='wrapper'>
    <div className='camera'>
        <video ref={videoRef}></video>
        <button  onClick={takePhoto} >Potwierdz rejestracje</button>
    </div>
    <div className="snap">
    <div className={'resulte' +(hasPhoto ? 'hasPhoto' : '')}>
    <canvas ref={photoRef}></canvas> 
    <div>{textToImage}</div>
    <div>{plate}</div>
    
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Camera