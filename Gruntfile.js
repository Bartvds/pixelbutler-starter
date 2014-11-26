/*jshint newcap: false*/
module.exports = function (grunt) {
	'use strict';

	var fs = require('fs');
	var path = require('path');
	var webpack = require('webpack');

	require('load-grunt-tasks')(grunt);

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: pkg,
		jshint: {
			options: grunt.file.readJSON('.jshintrc'),
			support: {
				src: ['Gruntfile.js']
			}
		},
		tslint: {
			options: {
				configuration: grunt.file.readJSON('tslint.json'),
				formatter: 'tslint-path-formatter'
			},
			source: ['src/**/*.ts'],
			test: ['test/src/**/*.ts']
		},
		clean: {
			dist: {
				options: {
					dot: true
				},
				src: [
					'dist/build/**/*'
				]
			},
			tmp: {
				options: {
					dot: true
				},
				src: [
					'tmp/**/*'
				]
			},
			cruft: [
				'tscommand-*.txt'
			]
		},
		connect: {
			options: {
				hostname: '0.0.0.0',
				base: './dist'
			},
			server: {
				options: {
					port: 8888,
					keepalive: true
				}
			}
		},
		watch: {
			all: {
				options: {
					atBegin: true
				},
				files: ['src/**/*.ts'],
				tasks: ['onwatch']
			}
		},
		ts: {
			options: {
				fast: 'never',  // enable if you like
				target: 'es5',
				module: 'commonjs',
				removeComments: true,
				declaration: false,
				sourceMap: true
			},
			index: {
				src: ['./src/index.ts'],
				outDir: './tmp'
			}
		},
		ts_clean: {
			build: {
				src: ['./tmp/**'],
				dot: true
			}
		},
		webpack: {
			options: {
				progress: false, // freaked on windows
				failOnError: true
			},
			debug: {
				devtool: 'source-map',
				module: {
					preLoaders: [
						{
							test: /\.js$/,
							loader: 'source-map-loader'
						}
					]
				},
				entry: './tmp/index.js',
				output: {
					sourcePrefix: '    ',
					library: 'pixelbutler_starter',
					libraryTarget: 'umd',
					path: './dist/build/',
					filename: 'index.js'
				}
			},
			min: {
				entry: './tmp/index.js',
				plugins: [
					new webpack.optimize.UglifyJsPlugin()
				],
				output: {
					library: 'pixelbutler_starter',
					libraryTarget: 'umd',
					path: './dist/build/',
					filename: 'index.js'
				}
			}
		}
	});

	// setup main aliases
	grunt.registerTask('default', ['build']);

	grunt.registerTask('lint', [
		'jshint',
		'tslint'
	]);

	grunt.registerTask('compile', [
		'clean',
		'ts:index',
		'clean:cruft'
	]);

	grunt.registerTask('prep', [
		'jshint:support'
	]);

	grunt.registerTask('build', [
		'prep',
		'compile',
		'tslint:source',
		'ts_clean:build',
		'webpack:min'
	]);

	grunt.registerTask('debug', [
		'prep',
		'compile',
		'tslint:source',
		'webpack:debug',
		'clean:tmp'
	]);

	grunt.registerTask('test', [
		'build',
		'runtest',
		// more!
	]);

	grunt.registerTask('prepublish', [
		'build'
		// more!
	]);

	grunt.registerTask('server', [
		'connect:server'
	]);

	grunt.registerTask('onwatch', [
		'compile'
	]);
};
