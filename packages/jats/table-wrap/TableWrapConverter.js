'use strict';

var FigureConverter = require('../figure/FigureConverter');

module.exports = {

  type: 'table-wrap',
  tagName: 'table-wrap',

  import: FigureConverter.import,
  export: FigureConverter.export
};