const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');         // importing
require('./7-mind-granade')                             // importing

// console.log(data)
// console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
