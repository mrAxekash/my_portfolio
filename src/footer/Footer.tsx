import * as React from 'react';
import footerStyle from './Footer.module.css'
import containerStyle from "../common/container/Container.module.css";
import {Socials} from "../socials/Socials";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <footer className={footerStyle.footer}>
            <div className={containerStyle.container}>
                <div className={footerStyle.wrapper}>
                    {/*<h2 className={footerStyle.footer_title}>Alexandr Kuchutkov</h2>*/}
                    <Socials />
                    <h3 className={footerStyle.footer_subtitle}>Copyright © 2023 </h3>
                </div>
            </div>
        </footer>
    );
};