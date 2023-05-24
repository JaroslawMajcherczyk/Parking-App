import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <div className="menu">
                <h3 className="title">Panel</h3>
                <ul className="list">
                    <li className="listItem"  >
                     <Link to="/dashboard/news">Home</Link> 
                    </li>
                    <li className="listItem">
                    <Link to="/dashboard/profile">Profile</Link> 
                    </li>
                    <li className="listItem">
                    <Link to="/dashboard/check">Check</Link> 
                    </li>
                    <li className="listItem">
                    <Link to="/dashboard/pay">Płatności</Link> 
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar