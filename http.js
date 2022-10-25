const http = require ('http')

http.createServer(function(peticion,respuesta){
    respuesta.writeHead(201,{'Content-Type':'application/txt'})
    respuesta.write('Hola usuario');
    respuesta.end()

}).listen(8080);

console.log('El servidor está corriendo en el puerto 8080')