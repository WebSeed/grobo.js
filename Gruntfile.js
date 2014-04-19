module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['js/**/*.js'],
            options: {
                ignores: ['js/built/**/*.*', 'js/vendor/**/*.js', 'js/tests/lib/**/*.js']
            }
        },
        jasmine: {
            all: {
                options: {
                    specs: 'js/tests/spec/**/*-spec.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'js'
                        }
                    }
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js',
                    name: 'main',
                    out: "js/built/grobo.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint', 'jasmine']);
    grunt.registerTask('compile', ['jshint', 'jasmine', 'requirejs']);
};