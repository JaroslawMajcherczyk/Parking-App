import React from 'react'
import './footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
        <h4>Regulamin</h4>
          <span>Regulamin usług</span>
          <span>Polityka Cooki</span>
          <span>Kontakt</span>
        </div>
        <div className="item">
          <h4>Kontakt</h4>
          <span>Numer tele</span>
          <span>adress</span>
          <span>mail</span>
          <span>mail</span>          
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <span>Coppy right 2023.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;