
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import LayoutWrapper from './layout-wrapper'
// import { ContactButton } from '../Add Modal/contact-modals'



function Layout() {
  return (
    <div>
    <LayoutWrapper>
        <Navbar/>
        {/* <ContactButton/> */}
        <Outlet/>
        <Footer/>
      </LayoutWrapper>
    </div>
  )
}

export default Layout
