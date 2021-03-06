module.exports = function(grunt){
  // List all files in the templates directory.
  var htmlFiles = grunt.file.expand({filter: 'isFile', cwd: 'src/jade'}, ['*']);
  //var htmlFiles = ['hi', 'h2'];

  return {
    development: {
      options: {
        pretty: true,
        data: {
          debug: false,
          rootPrefix: '',
          httpPrefix: 'http:',
          htmlFiles : htmlFiles
        }
      },
      files: [{
        cwd: '<%= src %>/jade',
        src: '*.jade',
        dest:'<%= public %>/',
        expand: true,
        ext:'.html'
      }]
    },
    tfs: {
      options: {
        pretty: true,
        data: {
          debug: false,
          rootPrefix: '/',
          httpPrefix: ''
        }
      },
      files: [{
        cwd: '<%= src %>/jade',
        src: '*.jade',
        dest:'<%= tfs %>/',
        expand: true,
        ext:'.html',
      }]
    },
    styleguide: {
      options: {
        pretty: true,
        data: {
          debug: false,
          rootPrefix: '../public/',
          httpPrefix: 'http:'
        }
      },
      files: [{
        cwd: '<%= src %>/jade/styleguide',
        src: ['*.jade', '!styleguide-base.jade'],
        dest:'../styleguide/',
        expand: true,
        ext:'.html',
      }]
    },
    spec: {
      options: {
        pretty: true,
        data: {
          debug: false,
          rootPrefix: '',
          httpPrefix: 'http:',
          htmlFiles : htmlFiles
        }
      },
      files: {
        // Set option in command line --targetFile="file"
        '<%= public %>/<%= targetFile %>.html': '<%= src %>/jade/<%= targetFile %>.jade'
      }
    }
  };
};