var express = require('express');
var app = express();
var blogRouter = require('./routes/blog');
var port = process.env.port || 3000;

app.get('/', function(req, res) {
    res.send('hello world');
})

app.use('/blog', blogRouter);

app.listen(port)
console.log('app start on port ', port);