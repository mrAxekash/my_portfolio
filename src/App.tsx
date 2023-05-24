import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import { Main } from './main/Main';
import {AboutMe} from "./section/about me/AboutMe";
import {Skills} from "./section/skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Freelance} from "./section/freelance/Freelance";
import { Contact } from './section/contact/Contact';
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <AboutMe />
            <Skills />
            <Portfolio/>
            <Freelance />
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
