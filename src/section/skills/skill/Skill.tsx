import * as React from 'react';
import skillStyle from './Skill.module.scss'


type Props = {
    imgText: string
    title: string
    description: string
    icon?: any
};

export const Skill = (props: Props) => {
    return (
        <div className={skillStyle.skill_container}>
            <div className={skillStyle.icon_wrapper}>
                {/*<FontAwesomeIcon icon={props.icon} className={skillStyle.icon}/>*/}
                <img className={skillStyle.icon} src={props.icon} alt=""/>
            </div>
            <h3 className={skillStyle.title}>{props.title}</h3>
            <p className={skillStyle.description}>{props.description}</p>
        </div>
    );
};