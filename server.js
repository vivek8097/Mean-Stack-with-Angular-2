var http=require("http");
var port = 3000;
var server=http.createServer(function(){
    console.log("creating server object");
});

server.listen(port,function(request,response){

    //console.log("server running on port http://localhost:3000");
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Welcome to edureka!!!!!!!!');
});