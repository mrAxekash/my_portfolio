import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from './main/Main';
import {AboutMe} from "./section/about me/AboutMe";
import {Skills} from "./section/skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Freelance} from "./section/freelance/Freelance";
import {Contact} from './section/contact/Contact';
import {Footer} from "./footer/Footer";
import {AttentionSeeker, Fade, Zoom} from "react-awesome-reveal";
import headerStyle from './header/Header.module.scss'
function App() {
    return (
        <div className="App">

            {/*<Zoom triggerOnce={true} >*/}
            <Fade triggerOnce={true} className={headerStyle.header}>
                <Header/>
            </Fade>
            <Fade triggerOnce={true}>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Freelance/>
                <Contact/>
                <Footer/>
            </Fade>
            {/*</Zoom>*/}
        </div>
    );
}

export default App;
