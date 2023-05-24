import React from 'react'
import './dashboard.scss'
import { Routes, Route,} from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import News from '../../components/News/News';
import Profile from '../../components/Profil/Profile';
import Pay from '../../components/Pay/Pay';
import Check from '../../components/Check/Check';
const Dashboard = () => {

  return (
    <div className='dashboard'>
    <Topbar/>
    <div className="container">
      <Sidebar/>
     <Routes>
      <Route path='/news' element={<News/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/check' element={<Check/>}/>
      
     </Routes>
      
     
    </div>
    </div>
  )
}

export default Dashboard