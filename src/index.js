var express = require('express');
var app = express();
var port = process.env.port || 8081;

app.get('/', function(req, res) {
    res.send('hello world');
})

app.listen(port)
console.log('app start on port ', port);