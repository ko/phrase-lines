'use strict';

exports.PhraseLines = function PhraseLines(phrase, width, height) {
  var newLines = [];
  var calcSize = 24;

  var words = phrase.replace(/^\n/, '').replace(/\n/g, ' ').split(' ');

  newLines.push(words.join(' '));

  for (var wordsPerLine = 1; wordsPerLine <= words.length; wordsPerLine++) {
    var line = [];
    newLines = [];

    for (var j = 0; j < words.length; j++) {
      if ((words[j].length + 1 + line.join(' ').length) * calcSize > 0.9 * width) {
        if (line.length > 0) {
          newLines.push(line.join(' '));
          line = [];
        }
      }

      if (line.length === wordsPerLine) {
        newLines.push(line.join(' '));
        line = [];
      }

      line.push(words[j]);
    }
    if (line.length > 0) {
      newLines.push(line.join(' '));
      line = [];
    }

    calcSize = 0.60 * height / newLines.length;
    var longestLineLength = Math.max.apply(Math, newLines.map(function (row) {
      return row.length;
    }));

    if (calcSize * longestLineLength > width) {
      calcSize = width / longestLineLength;
    }
  }

  return { lines: newLines, fontSize: calcSize };
};