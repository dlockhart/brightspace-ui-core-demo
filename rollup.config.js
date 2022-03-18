import { createBasicConfig } from '@open-wc/building-rollup';
import html from '@web/rollup-plugin-html';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import merge from 'deepmerge';

const baseConfig = createBasicConfig({
	developmentMode: false,
	outputDir: 'build',
});

export default merge(baseConfig, {
	plugins: [
		html({
			input: 'index.html',
		}),
		dynamicImportVars()
	],
});
