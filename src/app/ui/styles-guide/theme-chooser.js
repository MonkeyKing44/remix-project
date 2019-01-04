var styleGuideLight = require('./style-guide')
var styleGuideDark = require('./styleGuideDark')
var styleGuideDavid = require('./styleGuideDavid')
var Storage = require('remix-lib').Storage

module.exports = {

  chooser: function () {
    var themeStorage = new Storage('style:')
    if (themeStorage.exists('theme')) {
      if (themeStorage.get('theme') === 'dark') {
        return styleGuideDark()
      } else if (themeStorage.get('theme') === 'david') {
        return styleGuideDavid()
      } else {
        return styleGuideLight()
      }
    } else {
      return styleGuideLight()
    }
  },

  switchTheme: function (theme) {
    var themeStorage = new Storage('style:')
    themeStorage.set('theme', theme)
    if (theme === 'dark') {
      return styleGuideDark()
    } else if (theme === 'light') {
      return styleGuideLight()
    } else if (theme === 'david') {
      return styleGuideDavid()
    } else {
      return styleGuideLight()
    }
  }
}
