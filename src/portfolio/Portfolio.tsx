import * as React from "react";
import portfolioStyle from "./Portfolio.module.scss"
import containerStyle from "../common/container/Container.module.scss";
import {SectionTItle} from "../common/components/title/SectionTItle";
import {Project} from "./project/Project";
import project1Img from "../assets/image/project-1.jpg"
import project2Img from "../assets/image/project-2.jpg"
import project3Img from "../assets/image/project-3.jpg"
import projectSocialNetwork from "../assets/image/Social-Networking-Apps.png"
import {Fade} from "react-awesome-reveal";

type Props = {};
export const Portfolio = (props: Props) => {
    return (
        <section className={portfolioStyle.section} id={'portfolio'}>
            <div className={containerStyle.container}>
                <Fade direction={'up'} triggerOnce={true}>
                    <SectionTItle sectionTitle={'Portfolio'} header={'Some of my most recent project'}
                                  textColor={'black'}/>
                </Fade>
                <div className={portfolioStyle.wrapper}>
                    <Fade direction={'up'} triggerOnce={true}>
                        <Project picture={projectSocialNetwork}/>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true}>
                        <Project picture={project1Img}/>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true}>
                        <Project picture={project2Img}/>
                    </Fade>
                    <Fade direction={'up'} triggerOnce={true}>
                        <Project picture={project3Img}/>
                    </Fade>
                </div>
            </div>
        </section>
    );
};