import React, { useCallback, useState, useRef, useEffect} from 'react'

import './readNumbers.scss'
import { createWorker } from 'tesseract.js';
import Tesseract from 'tesseract.js';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';



const ReadNumbers = () => {
  const {currentUser} = useContext(AuthContext);

  const [textToImage, setTextToImage] = useState("");


  const worker = createWorker({
    logger: m => console.log(m)
  });
  
  (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(text);
    await worker.terminate();
  })();


  return (
    <div className="readNumbers">
      <span>Witaj</span>
      <div>{currentUser.displayName}</div>

    <div>{textToImage}</div>

    <div>
  
    </div>

  </div>
);
}

export default ReadNumbers