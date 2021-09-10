import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useCallback, useEffect, useState } from 'react';
import Counter from './Counter';

export default {
	title: 'Components/Counter',
	component: Counter,
	argTypes: {
		radiusType: {
			control: { type: 'select' },
			options: ['default', 'round', 'sharp'],
		},
		isDisabled: {
			table: {
				control: true,
			},
		},
		qty: {
			control: true,
		},
	},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
	/** useState에 qty값 입력 */
	const [current, setCurrent] = useState(1);
	/** 카운트 증가 함수 */
	const onIncrease = useCallback(() => {
		return setCurrent(current + 1);
	}, [current]);

	/** 카운트 감소 함수 */
	const onDecrease = useCallback(() => {
		return setCurrent(current - 1);
	}, [current]);

	/** value 값 변경 함수 */
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		/** NaN 체크 */
		if (isNaN(parseInt(value))) return setCurrent(args.min);
		return setCurrent(parseInt(value));
	};

	/** value 값 최대 / 최소값 초과 입력시 입력 설정 */
	useEffect(() => {
		if (current >= args.max) return setCurrent(args.max);
		if (current <= args.min) return setCurrent(args.min);
	})

	/** qty에 useState로 받은 current값 대입 */
	return (
		<Counter
			{...args}
			qty={current}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			onChange={onChange}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	min: 1,
	max: 100,
	isDisabled: false,
	radiusType: 'default',
	radiusSize: 'sm',
};
