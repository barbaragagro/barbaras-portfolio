import React from 'react'
import Footer from './footer/Footer';
import Profile from './profile/Profile';
import Header from './header/Header';
import './Home.css'

export default function Home() {
  return (
    <div className='home-container' id='Home'>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}
