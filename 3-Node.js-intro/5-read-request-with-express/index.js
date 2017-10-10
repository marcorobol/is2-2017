/*globals require, console, process */

//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');

//instantiate express
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//handle requests on /
app.all('/', function (req, res) {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //write response
    res.write('Server working properly.' + '\n');
    res.write('url: ' + req.url + '\n');
    res.write('method: ' + req.method.toLowerCase() + '\n');
    res.write('?: ' + util.inspect(req.query) + '\n');
    res.write('?username: ' + req.query.username + '\n');
    res.write('body: ' + util.inspect(req.body) + '\n');
    res.write('body.username: ' + req.body.username + '\n');
    //send response
    res.end();
    
});


//listen in a specific port
app.listen((process.env.PORT || 80));

//check status
console.log('Server running at http://localhost:80/');