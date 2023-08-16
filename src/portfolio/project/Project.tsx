import * as React from 'react';
import projectStyle from './Project.module.scss'
import {ProjectOverlay} from "../../common/components/button/ProjectOverlay";
import {useState} from "react";

type ProjectPropsType = {
    picture: string
}

export const Project = (props: ProjectPropsType) => {
    let [openComponent, setOpenComponent] = useState(false)

    return (
        <div
            className={projectStyle.project}
            style={{background: `url(${props.picture}) center center/cover no-repeat`}}
            onMouseEnter={(e) => {
                e && setOpenComponent(true)
            }}
            onMouseLeave={(e) => {
                e && setOpenComponent(false)
            }}
        >
            {openComponent && <ProjectOverlay />}

        </div>
    );
};