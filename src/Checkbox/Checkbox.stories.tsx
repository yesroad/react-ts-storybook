import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';


export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		radiusType: {
			control: { type: 'inline-radio' },
			options: ['default', 'round', 'sharp'],
		},
		color: {
			control: { type: 'inline-radio' },
			options: ['#202429', '#407249', '#c9974d'],
		},
		isChecked: {
			control: { type: null },
		}
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

const defaultArgs: {} = {
	isChecked: true,
	isDisabled: false,
	color: '#202429',
	value: 'test',
	name: 'test01',
};

export const Default = Template.bind({});
Default.args = {
	...defaultArgs,
	radiusType: 'default',
	label: 'Default',
};

export const Round = Template.bind({});
Round.args = {
	...defaultArgs,
	radiusType: 'round',
	label: 'Round',
	color: '#407249',
};

export const Sharp = Template.bind({});
Sharp.args = {
	...defaultArgs,
	radiusType: 'sharp',
	label: 'Sharp',
	color: '#c9974d',	
};

export const Empty = Template.bind({});
Empty.args = {
	...defaultArgs,
	radiusType: 'sharp',
	label: '',
};
