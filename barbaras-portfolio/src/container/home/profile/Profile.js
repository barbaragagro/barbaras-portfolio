import React from 'react';
import ScrollService from '../../../utilities/ScrollService';


import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
            
                 <div className='colz'>

                    <div className='colz-icon'>

                    <a href='https://github.com/barbaragagro'>
                       
                        <i className="fa-brands fa-square-github fa-2xl"></i>

                    
                    </a>
                    <a href='https://rs.linkedin.com/in/barbara-gagro-844a68222'>
                        <i className='fa-brands fa-linkedin fa-2xl'>

                        </i>
                    </a>
                    </div>
                </div> 
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                        Hi, I'm <span className='highlighted-text'>Barbara Gagro</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                    {""}
                        <h1>
                            {""}
                           
                                Software Developer 💻
                                
                        </h1>
                        <span className='profile-role-tagline'>
                            Master Engineer (Computer Graphics) 
                        </span>
                    </span>

                </div>
                <div className='profile-options'> </div>
                <button onClick={ScrollService.scrollHandler.scrollToContactMe}
                className='btn primary-btn'>
                   
                     {""} 
                     Contact Me {""}
                </button>
                <a href="GagroBarbaraCV.pdf" download='Barbara Gagro CV'>
                    <button className='btn highlighted-btn'>
                        Get My CV
                    </button>
                </a>
            </div>
        
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>

            </div>
        </div>
    </div>
  )
}
