import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../ui/ScrollProgress'

const RootLayout = () => {
  
  return (
    <div className='relative'>
        <ScrollProgress />      
        <Navbar/>
          <main className='min-h-screen'>
            <Outlet />
          </main>
        <Footer/>
    </div>
  )
}

export default RootLayout