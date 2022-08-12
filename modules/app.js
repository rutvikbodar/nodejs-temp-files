const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our home page");
    }
    else if(req.url==='/about'){
        res.end("here is our short history");
    }
    else{
        res.end('<h1>Oops, the page you are looking for doesnt exists!</h1>')
    }
});

server.listen(5000);