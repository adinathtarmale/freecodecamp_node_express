// Event loop

// const { concat } = require("lodash");

// the event loop allows Node.js too perform non-blocking I/O operations
// dispitethe fact thath JS is single threaded
// by offloading the operations to the system kernel whenever possible



// Javascript is Synchronous and Singlethreaded
//                  meaning js reads programs line by line start to end



//--------------JAVASCRIPT example of synchronous behaiviour--------------
// console.log('first task')
// console.time();              // .time    start
// for(let i=0; i<10000000; i++){
//     const wait = document.querySelector('#waiting')
//     wait.textContent = `Hey, Everyone is Waiting for me`;
// }
// console.timeEnd();
// console.log("next task");   // we can see this in browser node deos not supprot DOM

// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.end('Home Page')
//     }
//     if(req.url === '/about'){
//         // BLOCKING CODE !!!!
//         for(let i=0; i<100; i++){
//             for(let j=0; j<100; j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end("about page")
//     }
//     res.end('error page');
// })

// server.listen(5000, () =>{
//     console.log("server is listening on port 5000...")
// })




//--------------JAVASCRIPT achiving synchronous behaivoiour--------------
console.log('First Assignment');
setTimeout(() =>{                       // settimeout()
    console.log('Second Assignment');
}, 1000);
console.log('next task');


// setInterval(()=>{                    // setInterval()
//     console.log("hello world")
// }, 1000)
// console.log(`i will not run first`);

// process stays alive unless
// kill process CONTROLL + c
// unexpected error


//---------------------Event Loop in Action   Asynchronous behaiviour

const {readFile} = require('fs');

console.log('started a first task')
//  CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('ready to start new task');



// event loop server.listen
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('hello world')
})

server.listen(4000, () =>{
    console.log('server listening on port : 4000...')
})