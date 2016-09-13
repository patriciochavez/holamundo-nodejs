var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hola Mundo! desde un commit en github sobre OSE v3");
}
var www = http.createServer(handleRequest);
www.listen(8080);
