const http = require ('http')
const router = require('./router.js')
require('dotenv').config()


function index(req, res){

    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Pagina de Inicio')
}

const server = http.createServer(function(peticion,respuesta){
    switch(peticion.url){
        case '/':
            router.index(peticion, respuesta)
            break
        break
        case '/empleado':
            router.empleado(peticion, respuesta)
        break

        case '/about':
            router.about(peticion,respuesta)
        break    
        default:
            router.noEncontrado(peticion,respuesta)
            
        break    
    }
    
    respuesta.end()

})
server.listen(process.env.PORT,process.env.HOST, function(){
console.log(`Servidor Disponible http://${process.env.HOST}:${process.env.PORT}`)
})
