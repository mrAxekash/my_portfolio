import * as React from 'react';
import freelanceStyle from './Freelance.module.scss'
import containerStyle from "../../common/container/Container.module.scss";
import backGImage from '../../assets/image/intro-bg-2.jpg'
import {SectionTItle} from "../../common/components/title/SectionTItle";

type Props = {};
export const Freelance = (props: Props) => {
	return (
		<div style={{background: `url(${backGImage}) center center/cover no-repeat`}}
			 className={freelanceStyle.freelance}>
			<div className={containerStyle.container}>
				<SectionTItle sectionTitle={'Freelance'} header={'Interested in working with me?'} textColor={'white'}/>
                <a href="#" className={freelanceStyle.button}>Hire Me!</a>
			</div>
		</div>
	);
};