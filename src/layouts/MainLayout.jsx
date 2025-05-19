import React from 'react'
import Header from '../pages/Header'
import Content from '../pages/Content'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const MainLayout = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className="w-full h-[100vh]">
            <Header/>
            <Content>
                <Outlet/>
            </Content>
            <Footer/>
        </div>
    </div>
  )
}

export default MainLayout