// npm - global command comes with node
// npm -v 

// local dependency ---- use it only in the perticular project  -- usefull mostly used
// npm i <packageName>

// gloabl dependency ---- use it in any project -- less needed
// npm install -g <packageName>
// sudo install -g <packageName>  (linux)

// package.json - manifest file (stores info about the project/package)
// 3 ways package.json -- can be created
// 1.manual approach(create package.json in root and write its properties etc)
// 2.npm init       (step by step. press enter to skip)
// 3.npm init -y    (everything default)
//-------------- why do we need    package.json
// information is stored in this file about project dependencies in package.json

// npm i loadash           -- not needed
// npm i bootstrap         -- not needed for now


const _ = require('lodash')     // external package has tobe install first

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem)


