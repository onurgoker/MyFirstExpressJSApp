var http = require('http')
var log = require('./log')
var sayHello = require('./exportsDemo')

http.createServer(function(request, response) {

    if (request.url == '/admin') {
        response.write('This is admin page')
    } else if (request.url == "/") {
        response.write('This is homepage!')
    } else if (request.url == "/customer") {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.write(JSON.stringify({ name: 'Onur', surname: 'Göker' }))
    }

    response.end()
}).listen(8080)

console.log(sayHello());

log.info('Server is alive!')