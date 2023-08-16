import * as React from 'react';
import footerStyle from './Footer.module.scss'
import containerStyle from "../common/container/Container.module.scss";
import {Socials} from "../socials/Socials";
import {Fade} from 'react-awesome-reveal';

type Props = {};
export const Footer = (props: Props) => {
    return (
        <footer className={footerStyle.footer}>
            <div className={containerStyle.container}>
                <div className={footerStyle.wrapper}>
                    {/*<h2 className={footerStyle.footer_title}>Alexandr Kuchutkov</h2>*/}
                    <Fade direction={'up'} triggerOnce={true}>
                        <Socials/>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true}>
                        <h3 className={footerStyle.footer_subtitle}>Copyright © 2023 </h3>
                    </Fade>

                </div>
            </div>
        </footer>
    );
};