import * as React from 'react';
import homeStyle from './Home.module.scss'
import image from '../../assets/image/userImage.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons/faArrowCircleDown";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons/faArrowAltCircleDown";
import Particles from "react-particles";
import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import {Fade, Zoom} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect'

type Props = {};
export const Home = (props: Props) => {


    return (
        <section className={homeStyle.home}>

            <div className={homeStyle.textWrapper}>
                <h1 className={homeStyle.title}>I AM OPEN TO WORK AS A</h1>
                <ReactTypingEffect text={['FRONTEND', 'DEVELOPER' ]} className={homeStyle.subtitle} speed={150} typingDelay={0} eraseDelay={1500} />
                {/*<div>*/}
                {/*    <ReactTypingEffect text={['DEVELOPER', 'DEVELOPER' ]} className={homeStyle.subtitle} speed={150} typingDelay={1500} eraseDelay={1000} />*/}
                {/*</div>*/}

                {/*<h2 className={homeStyle.subtitle}>FRONTEND</h2>*/}
                {/*<h2 className={homeStyle.subtitle}>DEVELOPER</h2>*/}
                <p className={homeStyle.subsubtitle}>based in Minsk, Belarus</p>
                <button className={homeStyle.blackButton}>View my works</button>
                <button className={homeStyle.whiteButton}>
                    Contact me
                    <span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </span>
                </button>
            </div>
            <Zoom triggerOnce={true} >
                <div className={homeStyle.homeImage}
                    //container={{backgroundImage: `url(${image})` as any, backgroundRepeat: 'no-repeat'}}
                     style={{background: `url(${image}) center center/cover no-repeat`}}
                >
                    {/*<img src={image} alt=""/>*/}
                </div>
            </Zoom>

        </section>
    );
};