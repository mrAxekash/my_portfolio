import * as React from 'react';
import projectStyle from './Project.module.css'
import {ProjectOverlay} from "../../common/components/button/ProjectOverlay";

type ProjectPropsType = {
    picture: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div
            className={projectStyle.project}
            style={{background: `url(${props.picture}) center center/cover no-repeat`}}>
            <ProjectOverlay />
        </div>
    );
};