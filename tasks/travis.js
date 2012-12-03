/*
 * grunt-travis
 * https://github.com/arhea/grunt-travis
 *
 * Copyright (c) 2012 Alex Rhea
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('travis', 'Validate your travis yaml files', function() {

    var childProcess = require( 'child_process' );
    var done = this.async();
    var command = grunt.task.helper('travisBuildCommand',this.target);

    childProcess.exec(command , function(error, stdout, stderr ){

      grunt.log.writeln("Process Complete!");

      if(error) {
        grunt.log.error( stdout );
        done( false );
      } else {
        grunt.log.writeln( "Travis Output:" );
        grunt.log.write( stdout );
        done( true );
      }

    });

    grunt.log.writeln( "Running " + command );

  });

  grunt.registerHelper('travisBuildCommand',function(file) {
    var command = "travis-lint";
    if(file) {
      command = command + " " + file;
    }
    return command;
  });


};
