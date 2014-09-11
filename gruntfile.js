module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'hello.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');

};