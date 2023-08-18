import * as React from 'react';
import navStyle from './Nav.module.scss'
import {Link, animateScroll as scroll } from "react-scroll";

type Props = {};
export const Nav = (props: Props) => {
    return (
        <div className={navStyle.nav}>
            <Link to={"main"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >Home</Link>
            <Link to={"aboutMe"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >About me</Link>
            <Link to={"skills"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >Skills</Link>
            <Link to={"portfolio"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >Portfolio</Link>
            <Link to={"freelance"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >Freelance</Link>
            <Link to={"contact"} smooth={true} activeClass={navStyle.active} spy={true} offset={1} duration={500} >Contact</Link>

        </div>
    );
};