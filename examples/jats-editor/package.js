'use strict';

var ScientistPackage = require('../../packages/scientist/package');
var ExampleXMLStore = require('../ExampleXMLStore');

module.exports = {
  name: 'jats-editor',
  configure: function(config) {
    // Use the default Scientist package
    config.import(ScientistPackage);

    // Define XML Store
    config.setXMLStore(ExampleXMLStore);
    config.addStyle(__dirname, 'app.scss');
  }
};
