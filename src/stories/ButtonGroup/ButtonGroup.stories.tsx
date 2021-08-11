import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buttonArgs, buttonArgTypes } from '../common/ArgTypes';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

export default {
	title: 'Component/ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		...buttonArgTypes,
		direction: {
			control: { type: 'radio' },
			options: ['row', 'column'],
		},
		rightAlign: {
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup {...args} />
);

export const RightAlign = Template.bind({});
RightAlign.args = {
	...buttonArgs,
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
	...buttonArgs,
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
	...buttonArgs,
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
	...buttonArgs,
	direction: 'column',
	gap: '1rem',
	children: (
		<>
			<Button theme='tertiary'>취소</Button>
			<Button>확인</Button>
		</>
	),
};
