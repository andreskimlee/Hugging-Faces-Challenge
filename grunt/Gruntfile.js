const __path = require('path');
const CWD = __path.normalize(`${__dirname}/../front`);

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less']);
	
	grunt.initConfig({
		less: {
			options: {
				compress: false,
			},
			dist: {
				src: [
					`${CWD}/less/style.less`,
				],
				dest: `${CWD}/build/style.css`
			}
		},
		watch: {
			options: {
				livereload: true,
				cwd: CWD,
			},
			files: ["views/*", "less/*", "build/**/*.js"],
			tasks: 'default'
		},
	});
};
