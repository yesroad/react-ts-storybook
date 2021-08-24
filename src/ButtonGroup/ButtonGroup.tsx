import { css } from '@emotion/react';

export interface buttonProps {
	/** 버튼을 보여줄 방향 */ direction:
		| 'row'
		| 'column' /** 버튼을 우측 정렬. */;
	rightAlign?: boolean;
	/** 버튼사이의 간격을 설정 */
	gap: number | string;
	/** 버튼 그룹에서 보여줄 버튼들 */
	children: React.ReactNode;
	/* 스타일 커스터마이징 */
	className?: string;
}

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

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
	const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
	return css({
		'button + button': {
			[marginType]: gap,
		},
	});
};

/** 2개의 버튼을 묶어놓은 버튼그룹 컴포넌트 입니다. */
const ButtonGroup = ({
	direction = 'row',
	rightAlign,
	children,
	gap = '0.5rem',
	className,
}: buttonProps) => (
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

export default ButtonGroup;
