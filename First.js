var http = require("http");
http.createServer(function(request,respose){
    respose.writeHead(200,{'content-Type':'text/plain'});
    respose.end('test.............');
}).listen(8888);

console.log('server is running...');