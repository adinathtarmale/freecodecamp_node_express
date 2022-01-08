// http module built-in module

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        //res.write('welcome to our home page');
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('welcome to our about page');
    }
    else{
        res.end(`
        <h1>OOps!</h1>
        <p>we can't seem to find the page you are looking for </p>
        <a href="/">back home</a>`)
    }
})

server.listen(5000) // port no is arbetory