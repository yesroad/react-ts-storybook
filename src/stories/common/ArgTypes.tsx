export const buttonArgTypes: {} = {
  theme: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'tertiary'],
  },
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
  },
}

export const buttonArgs: {} = {
  theme: 'primary',
	disabled: false,
	size: 'medium',
};