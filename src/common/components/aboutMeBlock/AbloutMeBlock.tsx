import * as React from 'react';
import blockStyles from './AboutMeBlock.module.scss'

type Props = {
	title: string
	blockText: string
};
export const AbloutMeBlock = (props: Props) => {
	return (
		<div className={blockStyles.wrapperUpperblock}>
			<p className={blockStyles.blockTitle}>{props.title}:</p>
			<p className={blockStyles.blockText}>{props.blockText}</p>
		</div>
	);
};