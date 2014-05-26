module.exports = function(grunt) {


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', [		
		'sass',
		'concat'
	]);
	//grunt.registerTask('sass', ['concat', 'sass']);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		concat: {
			       dist: {
			         src: [
			           'assets/css/scss/partials/*.scss',
			         ],
			         dest: 'assets/css/scss/init.scss',
			       }
			     },
		
		sass: {
			dist: {
				options: {
					//style: 'compressed'
					style: 'expanded'
				},
				files: {
					'assets/css/main.css': 'assets/css/scss/demo.scss',
					//'css/windows.css':'css/windows.scss'
				}
			}
		},

		watch: {
			css: {
				files: ['assets/css/scss/**/*.scss'],
				tasks: ['concat','sass'],
				options: {
					spawn: false
				}
			}
		}


	});
	

};
