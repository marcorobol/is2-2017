/*globals require, console, process */

//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');

//instantiate express
var app = express();

//handle route with parameters
app.get('/book/:title', function(req, res) {
    res.send(req.params.title);
});

//handle get req on /page1
app.get('/page1', function (req, res) {
    res.send('Page1');
});


//handle get req on /page2
app.get('/page2', function (req, res) {
    res.send('Page2');
});


//handle post req on /
app.post('/page1', function (req, res) {
    res.send('POST Page1');
});


//handle post req on /
app.post('/page2', function (req, res) {
    res.send('POST Page2');
    
});


//listen in a specific port
app.listen((process.env.PORT || 80));

//check status
console.log('Server running at http://localhost:80/');