/*global module:false*/
module.exports = function(grunt) {

  grunt.registerMultiTask("bookmarklet", "Wrap incoming code in an IIFE to use as a bookmarklet", function() {
    var files = grunt.file.expandFiles( this.file.src ),
    code = grunt.helper("concat", files),
    min = grunt.helper("uglify", code, grunt.config("uglify")),
    bookmarklet = "javascript:(function($){" + min + "})(jQuery);";

    grunt.file.write( this.file.dest, bookmarklet );
  });

  // This whole thing is kind of a hack right now
  grunt.registerMultiTask("readme", "Combine and interpolate readmes together into main README.md", function() {

    var files = grunt.file.expandFiles( this.data ),

    bookmarklet = grunt.file.read( grunt.config("bookmarklet").multiline.dest ),

    readme = grunt.helper("concat", files, {separator: "\n"}).replace("{{multiline_bookmarklet}}", bookmarklet);

    grunt.file.write( this.target, readme );
  
  });



  // Project configuration.
  grunt.initConfig({
    //clean: ["dist/", "README.md"],
    meta: {
      banner: "/*! Github Enhancements - v0.1.0 - 4/25/2012\n" +
        "* Copyright (c) 2012 adam j. sontag (@ajpiano) and Jeremy Singer-Vine (@jsvine); Licensed MIT %> */"
    },
    lint: {
      files: ["grunt.js", "bookmarklet/*.js"]
    },
    qunit: {
      files: ["test/**/*.html"]
    },
    bookmarklet: {
      multiline: {
        dest: "dist/bookmarklet.js",
        src: [ "bookmarklet/*.js "]
      }
    },
    readme: {
      "README.md": [
        "header.md",
        "bookmarklet/*.md"
      ]
    },
    concat: {
    },
    min: {
      dist: {
        src: ["<config:concat.bookmarklet.dest>"],
        dest: "dist/FILE_NAME.min.js"
      }
    },
    watch: {
      files: "<config:lint.files>",
      tasks: "lint"
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        scripturl: true
      },
      globals: {
        $: true,
        console: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask("default", "lint bookmarklet readme");

};

