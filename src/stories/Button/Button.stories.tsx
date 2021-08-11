import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  theme: 'tertiary',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  theme: 'primary',
  children: 'Button',
};
