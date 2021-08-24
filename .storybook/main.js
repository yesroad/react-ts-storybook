module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('babel-loader'),
					options: {
						presets: [['react-app', { flow: false, typescript: true }]],
						plugins: [
							[
								'@emotion/babel-plugin-jsx-pragmatic',
								{
									export: 'jsx',
									import:
										'__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
									module: '@emotion/react',
								},
							],
							[
								'@babel/plugin-transform-react-jsx',
								{
									pragma:
										'__to_avoid_prepending_/** @jsxImportSource @emotion/react */',
								},
							],
							'react-require',
						],
					},
				},
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	},
};
