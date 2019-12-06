
const rootDirFinder = function(): string {
	let i = __dirname.split('/').findIndex((dir) => dir === 'hf-frontend-code-exercise');
	return __dirname.split('/').slice(0, i+1).join('/');
};
const __rootDir: string = rootDirFinder();

export default __rootDir;
