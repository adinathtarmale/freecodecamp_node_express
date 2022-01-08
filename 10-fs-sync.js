// fs module built-in (file system)
// synchronous  approach not useful when multiple users at same time

const {readFileSync, writeFileSync}= require('fs');

console.log('start')

const first = readFileSync('./content/first.txt',  {encoding:'utf8', flag:'r'});
const second = readFileSync('./content/second.txt',  {encoding:'utf8', flag:'r'});

writeFileSync('./content/result-sync.txt', `here IS the result: ${first}, ${second}`, {flag:'a'})

console.log('done with this task');
console.log('startig the next one');