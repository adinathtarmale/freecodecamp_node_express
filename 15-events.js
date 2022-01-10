// EVENTS in node js
// event driven programming
// used heavily in Node.js

const EnventEmitter = require('events');

const customEmitter = new EnventEmitter();

customEmitter.on('responce',(name, id) => {     // listenning
    console.log(`data received user ${name} with id: ${id}`);
})
customEmitter.on('responce',() => {         // listennig for responce
    console.log(`some other logic here`);
})   
customEmitter.emit('responce', 'john', 23);          // emmit the event



//---------------------------------------------

const http = require('http');

// const server = http.createServer((req, res) =>{
//     res.end("welcome");
// })

// Using Event Emitter API
const server = http.createServer()
// emits request events 
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('welcome')
})

server.listen(5000);