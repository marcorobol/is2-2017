/*globals require, console, process */

//express
var express = require('express');
var bodyParser = require('body-parser');
//inspect variables
var util = require('util');

//instantiate express
var app = express();

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//handle get req on /sum
app.get('/sum', function (req, res) {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var sum = x + y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('sum: ' + sum + '\n');
    //send response
    res.end();
});


//handle get req on /sum
app.get('/multiply', function (req, res) {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var multiply = x * y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('multiply: ' + multiply + '\n');
    //send response
    res.end();
});


//handle post req on /
app.post('/sum', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var sum = x + y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('sum: ' + sum + '\n');
    //send response
    res.end();
    
});


//handle post req on /
app.post('/multiply', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //process
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var multiply = x * y;
    
    //write response
    res.write('?x: ' + x + '\n');
    res.write('?y: ' + y + '\n');
    res.write('multiply: ' + multiply + '\n');
    //send response
    res.end();
    
});


//listen in a specific port
app.listen((process.env.PORT || 80));

//check status
console.log('Server running at http://localhost:80/');