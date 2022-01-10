// Asynchronous approach
// suitable for multi user approach

const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8',(err, result)=>{
    if(err){
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8',(err, result)=>{
    if(err){
        return;
    }
    const second = result;
    writeFile('./content/result-async.txt', `Here is Async result: ${first}, ${second}`, {flag:'a'},
        (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});

console.log('starting next one');


//------------------------------usong pormises
//--------------- async awake

// const {readFile, writeFile} = require('fs').promises

// const start = async() => {
//     try {
//         const first = await readFile('./content/first.txt', 'utf-8');
//         const second = await readFile('./content/second.txt', 'utf-8');
//         await writeFile(
//             './content/result-mind-granade.txt',
//             `THIS IS AWESOME : ${first}--${second}`,
//             {flag: 'a'}
//         )
//         console.log(first, second);
//     }catch(error){
//         console.log(error);
//     }
// }
// start();