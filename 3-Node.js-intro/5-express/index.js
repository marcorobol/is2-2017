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


//create a server
app.get('/', function(request, response) 
{
	response.writeHead(200, {'Content-Type': 'text/html'});

    //get GET
    var url_parts = url.parse(request.url, true);
    var getVar = url_parts.query; //aggancio un nuovo attributo
	
    var text = 'GET: ' +util.inspect(getVar);

    response.end(text);
  	
});

//create a server
app.post('/', function(request, response) 
{
	var text = '';
	response.writeHead(200, {'Content-Type': 'text/html'});

    var postVar='';
	
    var body = '';			
    request.on('data', function(data) 
    {
        body += data;
    });

    request.on('end', function() 
    {
        postVar = qs.parse(body);
    });

	
    text = text + 'POST: ' + util.inspect(postVar);
    text = text + "<br> <br>";

    response.end(text);
  	
});
 
//listen in a specific port
app.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');