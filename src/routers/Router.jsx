import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Signin from '../pages/Signin/Signin'
import Dashboard from '../pages/Dashboard/Dashboard'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Profile from '../components/Profil/Profile'
import News from '../components/News/News'
import Check from '../components/Check/Check'
import Pay from '../components/Pay/Pay'

const Router = () => {

  const {currentUser} = useContext(AuthContext);
 
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }




  return <Routes>
    <Route path='/' element={<Navigate to='home'/>}></Route>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/dashboard/' element={
    <RequireAuth>
    <Dashboard/>
    </RequireAuth>
    }> 
    <Route path='/dashboard/profile' element={<Profile/>}/>
    <Route path='/dashboard/news' element={<News/>}/>
    <Route path='/dashboard/check' element={<Check/>}/>
    <Route path='/dashboard/pay' element={<Pay/>}/>
    </Route>
    
  </Routes>
  
  
}

export default Router