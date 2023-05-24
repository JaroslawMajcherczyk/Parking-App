import React from 'react'
import { Fragment } from 'react'
import Router from '../routers/Router'
import { Header} from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'



export const Layout = () => {
  return <Fragment>
 <Header/>
    <div>
    <Router/>
  </div>
  <Footer/> 
 
</Fragment>
}
