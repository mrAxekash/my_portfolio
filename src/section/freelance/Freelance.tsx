import * as React from 'react';
import freelanceStyle from './Freelance.module.scss'
import containerStyle from "../../common/container/Container.module.scss";
import backGImage from '../../assets/image/intro-bg-2.jpg'
import {SectionTItle} from "../../common/components/title/SectionTItle";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-scroll";

type Props = {};
export const Freelance = (props: Props) => {
	return (
		<div style={{background: `url(${backGImage}) center center/cover no-repeat`}} id={'freelance'}
			 className={freelanceStyle.freelance}>
			<div className={containerStyle.container}>
				<Fade direction={'up'} triggerOnce={true}>
					<SectionTItle sectionTitle={'Freelance'} header={'Interested in working with me?'} textColor={'white'}/>
				</Fade>
				<Fade direction={'up'} triggerOnce={true}>
					<Link to={'contact'} smooth={true} className={freelanceStyle.button} >Hire Me!</Link>
				</Fade>
			</div>
		</div>
	);
};