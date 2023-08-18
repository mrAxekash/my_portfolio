import * as React from 'react';
import homeStyle from './Home.module.scss'
//import image from '../../assets/image/userImage.jpeg'
import image from '../../assets/image/29-bw.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons/faArrowAltCircleDown";
import {Zoom} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect'
import {Link} from "react-scroll";

type Props = {};
export const Home = (props: Props) => {
    return (
        <section className={homeStyle.home}>
            <div className={homeStyle.textWrapper}>
                <h1 className={homeStyle.title}>I AM OPEN TO WORK AS A</h1>
                <ReactTypingEffect text={['FRONTEND', 'DEVELOPER']} className={homeStyle.subtitle} speed={150}
                                   typingDelay={0} eraseDelay={1500}/>
                <p className={homeStyle.subsubtitle}>based in Minsk, Belarus</p>
                <button className={homeStyle.blackButton}>
                    <Link to={'portfolio'} smooth={true}>View my works</Link>
                </button>
                <button className={homeStyle.whiteButton}>
                    <Link to={'contact'} smooth={true}>
                        Contact me<>  </>
                        <span>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </span>
                    </Link>
                </button>
            </div>
            <Zoom triggerOnce={true}>
                <div className={homeStyle.homeImage}
                     style={{background: `url(${image}) center center/cover no-repeat`}}
                >
                </div>
            </Zoom>

        </section>
    );
};