/*globals require, console */

//Libraries
var http = require('http');
var dispatcher = require('./httpdispatcher');

//handle errors
dispatcher.onError(function (req, res) {
    //HTML head (type of the page)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //HTML content
    var parsedUrl = require('url').parse(req.url, true);
    res.end('Url ' + parsedUrl.pathname + ' not handled');
    console.log('Url ' + parsedUrl.pathname + ' not handled');
});

//handle request GET /page1
dispatcher.onGet('/page1', function (req, res) {
    //HTML head (type of the page)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //HTML content
    res.end('Page One');
});

//handle request POST /page2
dispatcher.onPost('/page2', function (req, res) {
    //HTML head (type of the page)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //HTML content
    res.end('Page Two');
});

//create a server
var server = http.createServer(function (req, res) {
    dispatcher.dispatch(req, res);
});

//listen in a specific port
server.listen(1337, '127.0.0.1');

//check status
console.log('Server running at http://127.0.0.1:1337/');