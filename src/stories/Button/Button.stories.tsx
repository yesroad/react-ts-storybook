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

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  theme: 'tertiary',
  children: 'Tertiary',
};
