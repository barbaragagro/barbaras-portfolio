import React from 'react';
import './Footer.css';
import bgImage from "../../../assets/home/shape-bg.png";



export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={bgImage} alt='no internet connection'/>
        </div>

    </div>
  )
}
