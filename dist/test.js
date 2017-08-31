'use strict';

var pl = require('./index.js');
console.log(pl);

var phrase = 'Hello World';
var width = 800;
var height = 600;
var currentFontSize = 24;

var _pl$PhraseLines = pl.PhraseLines(phrase, width, height, currentFontSize),
    lines = _pl$PhraseLines.lines,
    fontSize = _pl$PhraseLines.fontSize;

console.log('lines=' + lines + ', fontSize=' + fontSize);