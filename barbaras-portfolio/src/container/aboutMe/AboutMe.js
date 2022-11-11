import React from 'react'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import "./AboutMe.css";

export default function AboutMe(props) {

   const SCREEN_CONSTSANTS = {
        description:
          "A 24-year-old from Novi Sad, Serbia. Got my masters degree in october 2022. and now I'm ready to start my developer career. I'm a passionate problem solver and a quick learner.",
          highlights:{
          bullets: [
            "HTML/CSS",
            "JavaScript",
            "React JS",
            "Node.js, Express.js",
            "SQL Databases",
            "C# .NET",
            "Git/GitHub"
          ],
          heading: "Skills:",
        },
      };
      const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
           <div className='about-me-parent'>             
                <ScreenHeading title={'About Me'} subHeading={'Barbara Gagro'}/>
                <div className="about-me-card">
               <div className="about-me-profile"></div> 
              <div className="about-me-details">
                <span className="about-me-description">
                  {SCREEN_CONSTSANTS.description}
                </span>
                <div className="about-me-highlights">
                  <div className="highlight-heading">
                    <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
                <div className="about-me-options">
                  <button
                    className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
                  >
                    {" "}
                    Contact Me{" "}
                  </button>
                  <a href="GagroBarbaraCV.pdf" download='Barbara Gagro CV'>
                    <button className='btn highlighted-btn'>
                        Get My CV
                    </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
    }


    