import * as React from 'react';
import projectOverlay from './ProjectOverlay.module.scss'
import fileIcon from '../../../assets/icons/file.svg'
import {AttentionSeeker, Fade, Hinge, JackInTheBox, Roll, Zoom} from "react-awesome-reveal";
import 'animate.css'

type Props = {};
export const ProjectOverlay = (props: Props) => {
    return (
        <Fade className={projectOverlay.linkStyle}  >
            <a href="#" className={projectOverlay.linkStyle} >
                <img src={fileIcon} alt="fileIcon" className={projectOverlay.img}/>
                <h4 className={projectOverlay.header}>Detailed project 1</h4>
                <span className={projectOverlay.subheader}>Category</span>
            </a>
        // </Fade>
    );
};