import React from 'react'

// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Hero } from '../../components/hero/Hero';


const Layout = () => {
  return (
    <>
      <Header />
     
      <main className='site_main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default React.memo(Layout);