/*globals require, console, process */

//Libraries
var http = require('http');
//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');

//instantiate express
var app = express();

//listen in a specific port
app.set('port', (process.env.PORT || 1337));


//handle get request on /
app.get('/', function (request, response) {
    var url_parts;
    
	response.writeHead(200, {'Content-Type': 'text/html'});
    
    //parse URL string into an object
    url_parts = url.parse(request.url, true); //set 2nd paramenter to true to parse also properties into query field
    
    response.end('GET: ' + util.inspect(url_parts.query));
  	
});


//handle post request on /
app.post('/', function (request, response) {
	var url_parts = '';
    
	response.writeHead(200, {'Content-Type': 'text/html'});
    url_parts = url.parse(request.url, true);
    
    if(url_parts.query.username == 'test')
        response.end('POST: ' + util.inspect(url_parts.query));
    else
        response.end('invalid username');
});


//listen in a specific port
app.listen(1337, '127.0.0.1');

//check status
console.log('Server running at http://127.0.0.1:1337/');