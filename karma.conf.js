// Karma configuration
// Generated on Tue May 16 2017 14:18:30 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanaryHeadless'],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.js'
    ]
  })
}
