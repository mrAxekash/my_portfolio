import * as React from 'react';
import headerStyle from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {Socials} from "../socials/Socials";
import containerStyle from '../common/container/Container.module.scss'
import {BurgerNav} from "../burgerNav/BurgerNav";


type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className={headerStyle.header}>
            <div className={containerStyle.container}>
                <div className={headerStyle.wrapper}>
                    <h2 className={headerStyle.userName}>Alexandr</h2>
                    <Nav />
                    <BurgerNav/>
                    <Socials />
                </div>
            </div>
        </div>
    );
};