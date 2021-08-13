import { ComponentStory, ComponentMeta } from '@storybook/react';
import { css } from '@emotion/react';
import Icon, { iconTypes } from './Icon';

export default {
	title: 'Component/Icon',
	component: Icon,
	argTypes: {
		icon: {
			control: { type: 'select' },
			options: [...iconTypes],
		},
	},  
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

const defaultArgs: {} = {
	icon: 'heart',
	color: '#000',
	size: '1rem',
	className: '',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
	icon: 'heart',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  ...defaultArgs,
	icon: 'heart',
	size: '4rem',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...defaultArgs,
	icon: 'heart',
	color: 'red',
};

export const IconList = () => {
	return (
		<ul css={iconListStyle}>
			{iconTypes.map((icon) => (
				<li key={icon}>
					<Icon icon={icon} />
					{icon}
				</li>
			))}
		</ul>
	);
};

IconList.parameters = {
	controls: { hideNoControlsWarning: true },
}

const iconListStyle = css`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	li {
		box-sizing: border-box;
		width: 25%;
		padding: 1rem;
		display: flex;
		align-items: center;
		svg {
			margin-right: 1rem;
		}
	}
`;
