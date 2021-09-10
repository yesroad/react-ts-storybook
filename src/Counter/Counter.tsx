import { css } from '@emotion/react';
import { radiusStyle } from '../common/styles/styles';
import { RadiusProps } from '../common/types/types';

export interface CounterProps extends RadiusProps {
	/** disabled 여부 */
	isDisabled?: boolean;
	/** 최소값 */
	min: number;
	/** 최대값 */
	max: number;
	/** 현재값 */
	qty: number;
	/** 스타일 커스터마이징 */
	className?: string;
	/** 카운트 증가 함수 */
	onIncrease?: () => void;
	/** 카운트 감소 함수 */
	onDecrease?: () => void;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const style = css`
	width: auto;
	display: inline-flex;
	border: 1px solid #e4e6e9;
	overflow: hidden;
	button {
		width: 32px;
		height: 32px;
		background: #fff;
		border: none;
		cursor: pointer;
		padding: 0;
		font-size: 24px;
		color: #202429;
		&:disabled {
			cursor: default;
			color: #b7bbbf;
		}
	}
	input[type='text'] {
		width: 37px;
		height: 32px;
		font-size: 14px;
		text-align: center;
		background: #fff;
		color: #202429;
		border: none;
		border-left: 1px solid #e4e6e9;
		border-right: 1px solid #e4e6e9;
		padding: 0;
		box-sizing: border-box;
		&:disabled {
			color: #b7bbbf;
		}
	}
`;

/** 
  `plus/minus` 버튼을 이용하여 증가 및 감소 작업을 수행
 */
const Counter = ({
	isDisabled,
	min,
	max,
	qty,
	className,
	radiusType = 'default',
	radiusSize = 'sm',
	onIncrease,
	onDecrease,
	onChange,
}: CounterProps) => {
	return (
		<div
			css={[style, radiusStyle[radiusType][radiusSize]]}
			className={className}
		>
			<button
				type="button"
				disabled={qty <= min || isDisabled}
				onClick={onDecrease}
			>
				-
			</button>
			<input
				type="text"
				pattern="/^[0-9]*$/;"
				value={qty}
				disabled={isDisabled}
				onChange={onChange}
				inputMode="decimal"
			/>
			<button
				type="button"
				disabled={qty >= max || isDisabled}
				onClick={onIncrease}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
