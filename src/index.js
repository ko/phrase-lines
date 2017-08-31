exports.PhraseLines = function PhraseLines(phrase, width, height) {
  let newLines = [];
  let calcSize = 24;

  const words = phrase.replace(/^\n/, '').replace(/\n/g, ' ').split(' ');

  newLines.push(words.join(' '));

  for (let wordsPerLine = 1; wordsPerLine <= words.length; wordsPerLine++) {
    let line = [];
    newLines = [];

    for (let j = 0; j < words.length; j++) {
      if ((words[j].length + 1 + line.join(' ').length) * calcSize > (0.9 * width)) {
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
    const longestLineLength = Math.max.apply(Math, newLines.map(row => row.length));

    if (calcSize * longestLineLength > width ) {
      calcSize = width / longestLineLength;
    }
  } 

  return { lines: newLines, fontSize: calcSize };
};
