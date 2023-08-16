import * as React from 'react';
import freelanceStyle from './Freelance.module.scss'
import containerStyle from "../../common/container/Container.module.scss";
import backGImage from '../../assets/image/intro-bg-2.jpg'
import {SectionTItle} from "../../common/components/title/SectionTItle";
import {Fade} from "react-awesome-reveal";

type Props = {};
export const Freelance = (props: Props) => {
	return (
		<div style={{background: `url(${backGImage}) center center/cover no-repeat`}}
			 className={freelanceStyle.freelance}>
			<div className={containerStyle.container}>
				<Fade direction={'up'} triggerOnce={true}>
					<SectionTItle sectionTitle={'Freelance'} header={'Interested in working with me?'} textColor={'white'}/>
				</Fade>
				<Fade direction={'up'} triggerOnce={true}>
					<a href="#" className={freelanceStyle.button}>Hire Me!</a>
				</Fade>
			</div>
		</div>
	);
};