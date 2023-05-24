import * as React from "react";
import portfolioStyle from "./Portfolio.module.scss"
import containerStyle from "../common/container/Container.module.scss";
import {SectionTItle} from "../common/components/title/SectionTItle";
import {Project} from "./project/Project";
import project1Img from "../assets/image/project-1.jpg"
import project2Img from "../assets/image/project-2.jpg"
import project3Img from "../assets/image/project-3.jpg"
import projectSocialNetwork from "../assets/image/Social-Networking-Apps.png"

type Props = {

};
export const Portfolio = (props: Props) => {
    return (
        <section className={portfolioStyle.section}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'Portfolio'} header={'Some of my most recent project'} textColor={'black'}/>
                <div className={portfolioStyle.wrapper}>
                    <Project picture={projectSocialNetwork} />
                    <Project picture={project1Img} />
                    <Project picture={project2Img}/>
                    <Project picture={project3Img}/>
                </div>
            </div>
        </section>
    );
};