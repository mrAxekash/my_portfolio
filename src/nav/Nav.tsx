import * as React from 'react';
import navStyle from './Nav.module.scss'
import {Link, animateScroll as scroll } from "react-scroll";

type Props = {};
export const Nav = (props: Props) => {
    return (
        <div className={navStyle.nav}>
            <Link to={"main"} smooth={true} >Home</Link>
            <Link to={"aboutMe"} smooth={true} >About me</Link>
            <Link to={"skills"} smooth={true} >Skills</Link>
            <Link to={"portfolio"} smooth={true} >Portfolio</Link>
            <Link to={"contact"} smooth={true} >Contact</Link>
        </div>
    );
};