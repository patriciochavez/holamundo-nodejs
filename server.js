var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<img style='-webkit-user-select: none; cursor: zoom-out;' src='http://www.empresas.telefonica.com.ar/wp-content/themes/telefonica_empresas/img/bg/bg_productos.jpg' width='1366' height='784'>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
