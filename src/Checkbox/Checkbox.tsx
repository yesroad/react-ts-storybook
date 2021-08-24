import { css } from '@emotion/react';
import { icoCheck } from './images';

export interface StyleProps {
	/** 체크박스 radius type */
	radiusType?: 'default' | 'round' | 'sharp';
	/** 체크박스 색상 */
	color?: '#1b1c20' | '#135589' | '#3ddad7';
}

interface CheckboxProps extends StyleProps {
	/** 체크박스 checked 구분 */
	isChecked?: boolean;
	/** 체크박스 구분 value */
	value: string;
	/** 체크박스 구분 name */
	name: string;
	/** 체크박스 disabled 여부 */
	isDisabled?: boolean;
	/** 체크박스 설명 텍스트 */
	label?: string;
	/** 스타일 커스터마이징 */
	className?: string;
	/** 체크박스 이벤트 */
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const style = (props: StyleProps) => css`
	input[type='checkbox'] {
		position: absolute;
		width: 0px;
		height: 0px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
		& + label {
			display: inline-block;
			position: relative;
			padding-left: 26px;
			cursor: pointer;
			vertical-align: top;
		}
		& + label:before {
			content: '';
			left: 0;
			top: -2px;
			position: absolute;
			border: 1px solid #e4e6e9;
			width: 20px;
			height: 20px;
			background-color: #fff;
			background-position: 50% 50%;
			background-repeat: no-repeat;
			box-sizing: border-box;
			border-radius: ${props.radiusType === 'sharp' ? '2px' : '4px'};
		}
	}
	input[type='checkbox']:checked + label:before {
		background-image: url(${icoCheck});
		background-color: ${props.color};
		border: 1px solid ${props.color};
	}
	input[type='checkbox']:disabled + label:before {
		background-color: #d1d3cf;
		border: 1px solid #d1d3cf;
	}
`;

/** 
  목록에서 하나 이상의 옵션을 선택할 수 있는 기능의 체크박스입니다. 
 */
const Checkbox = ({
	isChecked = true,
	isDisabled = false,
	value = 'test',
	name = 'test01',
	label,
	className,
	onChange,
	radiusType = 'default',
	color = '#1b1c20',
}: CheckboxProps) => {
	return (
		<span css={[style({ radiusType, color })]}>
			<input
				type="checkbox"
				value={value}
				id={value}
				name={name}
				defaultChecked={isChecked}
				disabled={isDisabled}
				className={className}
				onChange={onChange}
			/>
			<label htmlFor={value}>{label}</label>
		</span>
	);
};

export default Checkbox;
