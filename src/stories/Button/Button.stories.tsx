import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
	title: 'Component/Button',
	component: Button,
	argTypes: {
		theme: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const defaultArgs: {} = {
	disabled: false,
	size: 'medium',
};

export const Default = Template.bind({});
Default.args = {
	theme: 'primary',
	children: 'Button',
	...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
	theme: 'primary',
	children: 'Primary',
	...defaultArgs,
};

export const Secondary = Template.bind({});
Secondary.args = {
	theme: 'secondary',
	children: 'Secondary',
	...defaultArgs,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	theme: 'tertiary',
	children: 'Tertiary',
	...defaultArgs,
};
