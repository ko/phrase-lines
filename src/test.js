const pl = require('./index.js');
console.log(pl);

const phrase = 'Hello World';
const width = 800;
const height = 600;
const currentFontSize = 24;
const { lines, fontSize } = pl.PhraseLines(phrase, width, height, currentFontSize);
console.log(`lines=${lines}, fontSize=${fontSize}`);
