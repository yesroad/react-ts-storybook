/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ButtonProps } from './types';

const Button = ({
	children,
	theme = 'primary',
	size = 'medium',
	onClick,
	...props
}: ButtonProps) => {
	return (
		<button
			type='button'
			css={[buttonStyle, themes[theme], sizes[size]]}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

const buttonStyle = css`
  cursor: pointer;
	outline: none;
	border: none;
	box-sizing: border-box;
	height: 2rem;
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	background: #20c997;
	color: white;
	border-radius: 0.25rem;
	line-height: 1;
	font-weight: 600;
	&:focus {
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
	&:hover {
		background: #38d9a9;
	}
	&:active {
		background: #12b886;
	}
`;

const themes = {
	primary: css`
		background: #20c997;
		color: white;
		&:hover {
			background: #38d9a9;
		}
		&:active {
			background: #12b886;
		}
	`,
	secondary: css`
		background: #e9ecef;
		color: #343a40;
		&:hover {
			background: #f1f3f5;
		}
		&:active {
			background: #dee2e6;
		}
	`,
	tertiary: css`
		background: none;
		color: #20c997;
		&:hover {
			background: #e6fcf5;
		}
		&:active {
			background: #c3fae8;
		}
	`,
};

const sizes = {
	small: css`
		height: 1.75rem;
		font-size: 0.75rem;
		padding: 0 0.875rem;
	`,
	medium: css`
		height: 2.5rem;
		font-size: 1rem;
		padding: 0 1rem;
	`,
	large: css`
		height: 3rem;
		font-size: 1.125rem;
		padding: 0 1.5rem;
	`,
};

export default Button;
