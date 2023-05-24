import * as React from 'react';
import skillsSectionStyle from './SectionTitle.module.scss'


type Props = {
    sectionTitle: string
    header: string
    textColor?: string | 'black'
};
export const SectionTItle = (props: Props) => {
    return (
        <div className={skillsSectionStyle.sectionTitle}>
            <p>
                <span className={skillsSectionStyle.preHeaderText}>
                    {props.sectionTitle}
                </span>
            </p>
            <h2 className={props.textColor === 'black' ? skillsSectionStyle.header : skillsSectionStyle.header_color}>
                {props.header}
            </h2>
        </div>
    );
};