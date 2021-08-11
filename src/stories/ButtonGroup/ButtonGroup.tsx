/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ButtonGroupProps } from './types';

const ButtonGroup = ({
	direction = 'row',
	rightAlign,
	children,
	gap = '0.5rem',
	className,
}: ButtonGroupProps) => {
	return (
		<section
			css={[
				style,
				gapStyle(direction, gap),
				rightAlign && rightAlignStyle,
				direction === 'column' && columnStyle,
			]}
			className={className}
		>
			{children}
		</section>
	);
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
	const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
	return css({
		'button + button': {
			[marginType]: gap,
		},
	});
};

const style = css`
	display: flex;
	flex-direction: direction;
`;

const rightAlignStyle = css`
	justify-content: flex-end;
`;

const columnStyle = css`
	flex-wrap: wrap;
	button {
		width: 100%;
	}
`;

export default ButtonGroup;
