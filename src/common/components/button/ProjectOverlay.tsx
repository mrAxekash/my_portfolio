import * as React from 'react';
import projectOverlay from './ProjectOverlay.module.scss'
import fileIcon from '../../../assets/icons/file.svg'

type Props = {

};
export const ProjectOverlay = (props: Props) => {
	return (
	<a href="#" className={projectOverlay.linkStyle}>
		<img src={fileIcon} alt="fileIcon" className={projectOverlay.img}/>
		<h4 className={projectOverlay.header}>Detailed project 1</h4>
		<span className={projectOverlay.subheader}>Category</span>
	</a>

	);
};