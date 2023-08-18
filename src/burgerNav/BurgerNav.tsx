import * as React from 'react';
import burgerNavStyle from './BirgerNav.module.scss'
import {Link, animateScroll as scroll } from "react-scroll";

type Props = {};
export const BurgerNav = (props: Props) => {
    return (
        <div className={burgerNavStyle.burgerNav}>
            <Link to={"main"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >Home</Link>
            <Link to={"aboutMe"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >About me</Link>
            <Link to={"skills"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >Skills</Link>
            <Link to={"portfolio"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >Portfolio</Link>
            <Link to={"freelance"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >Freelance</Link>
            <Link to={"contact"} smooth={true} activeClass={burgerNavStyle.active} spy={true} offset={1} duration={500} >Contact</Link>

        </div>
    );
};