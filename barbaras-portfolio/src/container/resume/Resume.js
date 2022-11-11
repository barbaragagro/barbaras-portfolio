import React, { useState } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

import "./Resume.css";
import educationlogo from  "../../assets/Resume/education.svg";
import contactlogo from "../../assets/Resume/contact.png";
import interestslogo from "../../assets/Resume/interests.svg";
import programming from "../../assets/Resume/programming-skills.svg";


const Resume = (props) => {
 
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>

      </div>
    );
  };


  const resumeBullets = [
    { label: "Education", logoSrc: educationlogo },
    { label: "Projects", logoSrc: programming },
    { label: "Interests", logoSrc: interestslogo },
    { label: "Contact", logoSrc: contactlogo },
  ];


  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      //link: "" ,
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Web app for face recognition in images",
      link: "https://github.com/barbaragagro" ,
      description:
        "Web application that has it's own SQL database, where users can sign in or register as new user. Then paste any image link, software recognizes facial features and puts a smiley face over it. Also software remember how many photos user pasted in.",
      subHeading:
        "Technologies Used:  React Native, PostegreSQL, Express Js, Node Js.",
    },
    {
      title: "Android AR video game",
      link: "https://www.pluralsight.com/guides/understanding-links-in-reactjs" ,
      description:
        "Android AR video pet game",
      subHeading:
        "Technologies Used: C#, Unity.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Faculty of Technical Science, Novi Sad"}
        subHeading={"MASTER OF COMPUTER GRAPHICS"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
       heading={"Faculty of Technical Science, Novi Sad"}
       subHeading={"BACHELOR OF COMPUTER GRAPHICS"}
       fromDate={"2017"}
       toDate={"2021"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Jovan Jovanović Zmaj Gymnasium, Novi Sad"}
        fromDate={"2013"}
        toDate={"2017"}
      />
    </div>,

    <div className="project-class resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <div><ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
        <div className="resume-project-link">
        <button><a style={{color: '#916268', fontWeight: "bold"}} target="_blank"  rel="noreferrer" href={projectsDetails.link? projectsDetails.link : ""}>click here to see the project</a></button>
      </div></div>
      ))}
    </div>,

 
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Figure Skating"
        description="When I was younger, I trained competitive skating for 12 years. Now it's one of my favorite hobbies."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="CrossFit"
        description="I like to think of myself as a fitness enthusiast. Crossfit training challenges me every day, physically and mentally. I love seeing myself pushing my boundaries every day."
      />
    </div>,


    <div className="resume-screen-container" key="contact">
        <ResumeHeading
          heading="EMAIL"
          description="barbaragagro1@gmail.com"
        />
        <ResumeHeading
          heading="PHONE NUMBER"
          description="+381616048949"
        />
      </div>,
 ];
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
  className="resume-container screen-container 
  fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"}/>
      
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;