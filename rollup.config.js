import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import del from 'rollup-plugin-delete';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', '@emotion/react'];

const config = [
	{
		input: pkg.source,
		output: {
			sourcemap: false,
			file: pkg.main,
			format: 'esm',
		},
		external,
		plugins: [
			resolve({ extensions }),
			babel({ exclude: 'node_modules/**' }),
			commonjs({ include: 'node_modules/**' }),
			typescript({ tsconfig: './tsconfig.json', clean: true }),
			svgr(),
			image(),
			url(),
			peerDepsExternal(),
			sourcemaps(),
			del({ targets: ['dist/*'] }),
		],
	},
	{
		input: './src/common/types/types.d.ts',
		output: [{ file: 'dist/common/types/types.d.ts', format: 'es' }],
		plugins: [dts()],
	},
];
export default config;
