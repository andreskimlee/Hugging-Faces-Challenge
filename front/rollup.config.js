import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const PRODUCTION = !!process.env.PRODUCTION;

const OUTFILE_DEV  = `build/bundle.js`;



export default {
	input: `dist/controller.js`,
	output: {
		file: OUTFILE_DEV,
		format: `iife`,
	},
	plugins: [
		resolve(),
		PRODUCTION ? terser() : undefined,
	]
}
