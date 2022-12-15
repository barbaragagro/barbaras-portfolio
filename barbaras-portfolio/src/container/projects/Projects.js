import React from 'react'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'
import './Projects.css';



export default function Projects(props) {

  return (
    <div 
        className='fade-in about-me-container screen-container' id={props.id || ""} >
         <div className='about-me-parent'>             
            <ScreenHeading title={'Projects'} subHeading={'My work'}/>
            <div className="about-me-card">
                <div className="project-details">

{/* PERSONAL WEBSITE */}
                    <div className="projectClass">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Personal Portfolio Website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, Bootstrap.</div>
                    <div className='proj-heading-description'>A Personal Portfolio website, compatible to mobile phones, tablets and PCs, to showcase all my details and projects at one place.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>

{/* FACE RECOGNITION */}
                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Web app for face recognition in images`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used:  React Native, PostegreSQL, Express Js, Node Js.</div>
                    <div className='proj-heading-description'>Web application that has it's own SQL database, where users can sign in or register as new user. Then paste any image link, software recognizes facial features and puts a smiley face over it. Also software remember how many photos user pasted in.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>

{/* WEBSITE ANTDESIGN */}
                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`AntDesign Website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, AntDesign.</div>
                    <div className='proj-heading-description'>Frontend website created with the help of React & AntDesign.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>

{/* AR GAME */}

                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Android AR video game`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: C#, Unity.</div>
                    <div className='proj-heading-description'>Android AR video pet game.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>


{/* ROBOFRIENDS */}

                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Personal portfolio website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, Bootstrap</div>
                    <div className='proj-heading-description'>A Personal Portfolio website, compatible to mobile phones, tablets and PCs, to showcase all my details and projects at one place.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>


{/* REMINDER APP */}



                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Personal portfolio website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, Bootstrap</div>
                    <div className='proj-heading-description'>A Personal Portfolio website, compatible to mobile phones, tablets and PCs, to showcase all my details and projects at one place.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>


{/* COUNTDOWN APP */}

                    <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Personal portfolio website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, Bootstrap</div>
                    <div className='proj-heading-description'>A Personal Portfolio website, compatible to mobile phones, tablets and PCs, to showcase all my details and projects at one place.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>

{/* TYPESCRIPT */}

                <div className="projectClass project-between">
                    <h3> <i className="bulletClass fa-solid fa-laptop-code"></i> {`Personal portfolio website`} </h3>
                    </div>
                    <div className='proj-sub-heading'> Technologies Used: React JS, Bootstrap</div>
                    <div className='proj-heading-description'>A Personal Portfolio website, compatible to mobile phones, tablets and PCs, to showcase all my details and projects at one place.</div>
                    <div className="paddingClass about-me-options">
                        <button className=" btn primary-btn">
                        <a style={{color: 'white' }} target="_blank"  rel="noreferrer"href='https://barbaragagro.github.io/barbaras-portfolio/'>{" "}
                        Visit Site{" "}</a>
                        </button>
                        <a href="https://github.com/barbaragagro/barbaras-portfolio" >
                        <button className='btn highlighted-btn'>
                             See GitHub Repository
                        </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
