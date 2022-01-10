// streams

const {writeFileSync} = require('fs');

for(let i=0; i<10000; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}



//------------------------------------------------------
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    hignWaterMark:90000,
    encoding:'utf8'
});

// default size is 64kb
// last buffre - reminder
// hignWaterMark - control size
// const stream = createreadstrem('./content/big.txt', {hignWaterMark:90000})
// const stream = createreadstrem('../content/big.txt', {encoding:'utf8'})

stream.on('data', (result) =>{
    console.log(result)
})
stream.on('error', (err)=>console.log(err)) 
