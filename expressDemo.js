var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (request, response) {
    response.send("Hello world!")
})

app.get('/admin', function (request, response) {
    var id = request.query.id

    response.send("Hello admin! Your ID:" + id)
})

app.post('/', urlEncodedParser, function (request, response) {
    response.send("Post request is successfull. Your usermane:" + request.body.username)
})

app.delete('/', function (request, response) {
    response.send("Delete request is successfull")
})


var server = app.listen(8080);