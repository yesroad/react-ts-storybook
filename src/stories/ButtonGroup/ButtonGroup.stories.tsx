import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

export default {
	title: 'Component/ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		direction: {
			control: { type: 'inline-radio' },
			options: ['row', 'column'],
		},
		rightAlign: {
			control: { type: 'boolean' },
		},
		gap: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup {...args} />
);

const defaultArgs: {} = {
	direction: 'row',
	rightAlign: false,
	gap: '0.5rem',
	className: '',
};

export const RightAlign = Template.bind({});
RightAlign.args = {
	...defaultArgs,
	rightAlign: true,
	children: (
		<>
			<Button theme='tertiary'>취소</Button>
			<Button>확인</Button>
		</>
	),
};

export const Primary = Template.bind({});
Primary.args = {
	...defaultArgs,
	direction: 'column',
	children: (
		<>
			<Button>CLICK ME</Button>
			<Button>CLICK ME</Button>
		</>
	),
};

export const Secondary = Template.bind({});
Secondary.args = {
	...defaultArgs,
	gap: '1rem',
	children: (
		<>
			<Button theme='tertiary'>취소</Button>
			<Button>확인</Button>
		</>
	),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	...defaultArgs,
	direction: 'column',
	gap: '1rem',
	children: (
		<>
			<Button theme='tertiary'>취소</Button>
			<Button>확인</Button>
		</>
	),
};
