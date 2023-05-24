import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <section className="header">
      <div className="wrapper">
        <div className="left">
          <div className="item">
          <Link className="link" to="/about">O nas</Link>
          </div>
          <div className="item">
          <Link className="link" to="/contact">Kontakt</Link>
          </div>
        </div>
        <div className="center">
          <div className="item">
          <Link className="link" to="/">Park-App</Link>
          </div>
        </div>
        <div className="right">
        <div className="item">
          <Link className="link" to="/login">Login</Link>
          </div><div className="item">
          <Link className="link" to="/signin">Rejestruj</Link>
          </div>
        </div>
        </div>
    </section>
   
  )
}

export default Header;