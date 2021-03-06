'use strict';

var TextBlock = require('substance/model/TextBlock');

function ParagraphNode() {
  ParagraphNode.super.apply(this, arguments);
}

TextBlock.extend(ParagraphNode);

ParagraphNode.static.name = "paragraph";

ParagraphNode.static.defineSchema({
  attributes: { type: 'object', default: {} },
});

module.exports = ParagraphNode;
