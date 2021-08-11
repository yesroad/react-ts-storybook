import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buttonArgs, buttonArgTypes } from '../common/ArgTypes';

import Button from './Button';

export default {
	title: 'Component/Button',
	component: Button,
	argTypes: {
		...buttonArgTypes
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	...buttonArgs,	
	theme: 'primary',
	children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
	...buttonArgs,	
	theme: 'primary',
	children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	...buttonArgs,	
	theme: 'secondary',
	children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	...buttonArgs,	
	theme: 'tertiary',
	children: 'Tertiary',
};
