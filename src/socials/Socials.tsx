import * as React from 'react';
import socialsStyle from './Socials.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

type Props = {};
export const Socials = (props: Props) => {
    return (
        <div className={socialsStyle.socials}>
            <div className={socialsStyle.socialNetwork}>
                <a href="https://facebook.com/" className={socialsStyle.socialLinks}>
                    <FontAwesomeIcon icon={faFacebook} className={socialsStyle.iconStyle}/>
                </a>
            </div>
            <div className={socialsStyle.socialNetwork}>
                <a href="https://mail.ru/">
                    <FontAwesomeIcon icon={faEnvelope} className={socialsStyle.iconStyle}/>
                </a>
            </div>
            <div className={socialsStyle.socialNetwork}>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} className={socialsStyle.iconStyle}/>
                </a>
            </div>
            <div className={socialsStyle.socialNetwork}>
                <a href="https://web.telegram.org/">
                    <FontAwesomeIcon icon={faTelegram} className={socialsStyle.iconStyle}/>
                </a>
            </div>
        </div>
    );
};