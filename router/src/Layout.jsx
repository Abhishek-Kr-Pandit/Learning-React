import React from 'react'
import Header from './Components/Header/Header/Header'
import Footer from './Components/Header/Footer/Footer'
import Home from './Components/Header/Home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout