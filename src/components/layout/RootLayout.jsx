import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../ui/ScrollProgress'
import CustomCursor from '../ui/CustomCursor'
import FloatingCVButton from '../ui/FloatingCVButton'

const RootLayout = () => {

  return (
    <div className='relative'>
        <CustomCursor/>
        <ScrollProgress />
        <FloatingCVButton />
        <Navbar/>
          <main className='min-h-screen'>
            <Outlet />
          </main>
        <Footer/>
    </div>
  )
}

export default RootLayout