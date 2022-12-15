import Home from "../container/home/Home";
import AboutMe from "../container/aboutMe/AboutMe";
import Resume from "../container/resume/Resume";
import Projects from "../container/projects/Projects";
import ContactMe from "../container/contactMe/ContactMe";


export const TOTAL_SCREENS =[
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name : "About Me",
        component: AboutMe,
    },
    {
        screen_name : "Resume",
        component: Resume,
    },
    {
        screen_name : "Projects",
        component: Projects,
    },
     {
         screen_name : "ContactMe",
         component: ContactMe,
     },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) {return -1};
    for(let i=0; i< TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name===screen_name) return i;
    }
    return -1
};