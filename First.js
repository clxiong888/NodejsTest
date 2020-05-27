var http = require("http");
http.createServer(function(request,respose){
    respose.writeHead(200,{'content-Type':'text/plain'});
    respose.end('test.............');
}).listen(8888);

console.log('server is running...');

var fs = require("fs");
var data = fs.readFileSync("README.md");
console.log(data.toString());
console.log("End..")


fs.readFile("README.md", (err,data)=>{
    if(err)
    {
        console.error(err)
    }
    else
    {
        console.log("The message:"+ data);
    }
})
console.log("sync end..");