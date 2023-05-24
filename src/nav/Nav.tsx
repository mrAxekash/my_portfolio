import * as React from 'react';
import navStyle from './Nav.module.scss'

type Props = {};
export const Nav = (props: Props) => {
    return (
        <div className={navStyle.nav}>
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </div>
    );
};