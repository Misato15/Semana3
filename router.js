const http = require('http')
let objeto={
    "user":"plopez",
    "password":"12345"

}
//METODO GET, POST, PUT O DELETE
function index(req, res){

    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de Inicio Actualizada')
}

function empleado(req, res){

    res.writeHead(200,{'Content-Type':'application/plain'})
    res.write(JSON.stringify(objeto))
}

function about(req, res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('Sitio desarrollado por Salvador')

}

function noEncontrado(req, res){
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('Pagina no disponible')
}

module.exports={
    index,
    empleado,
    about,
    noEncontrado
}