import { css } from '@emotion/react';

export const radiusStyle = {
	default: {
		sm: css`
			border-radius: 4px;
		`,
		md: css`
			border-radius: 8px;
		`,
		lg: css`
			border-radius: 16px;
		`,
		circle: css`
			border-radius: 50%;
		`,
	},
	round: {
		sm: css`
			border-radius: 4px;
		`,
		md: css`
			border-radius: 8px;
		`,
		lg: css`
			border-radius: 12px;
		`,
		circle: css`
			border-radius: 50%;
		`,
	},
	sharp: {
		sm: css`
			border-radius: 2px;
		`,
		md: css`
			border-radius: 2px;
		`,
		lg: css`
			border-radius: 2px;
		`,
		circle: css`
			border-radius: 50%;
		`,
	},
};
