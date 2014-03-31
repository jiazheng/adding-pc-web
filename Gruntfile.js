module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        'min': {
            'dist': {
                'src': ['scripts/main.js'],
                'dest': 'build/static/fm/js/main.js'
            },
            'dist2': {
                'src': ['scripts/main-lteie8.js'],
                'dest': 'build/static/fm/js/main-lteie8.js',
            }
        },
        'cssmin': {
            'dist': {
                'src': ['style/main.css'],
                'dest': 'build/static/fm/css/main.css'
            },
            'dist2': {
                'src': ['style/main-ie9.css'],
                'dest': 'build/static/fm/css/main-ie9.css'
            },
            'dist3': {
                'src': ['style/main-lteie8.css'],
                'dest': 'build/static/fm/css/main-lteie8.css'
            }
        },
        'copy': {
            'main': {
                'files': [
                    // includes files within path and its sub-directories
                    {'expand': true, 'src': ['images/*'], 'dest': 'build/static/fm/', 'filter': 'isFile'},
                ]
            }
        },
        'replace': {
            example: {
                src: ['index.html'],
                dest: 'build/www_fm/template/',
                replacements: [{
                    from: 'href="style/',
                    to: 'href="/static/fm/css/'
                }, {
                    from: /(<img.*src=")(.*)(".*?\/>)/g,
                    to: '$1/static/fm/$2$3'
                }, {
                    from: 'src="scripts/',
                    to: 'src="/static/fm/js/'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    // Default task(s).
    grunt.registerTask('default', ['min', 'cssmin', 'copy', 'replace']);
};