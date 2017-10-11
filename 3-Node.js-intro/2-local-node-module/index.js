//Libraries
const http = require('http');
const miomodulo = require('./modulo.js');
 
//create a server
const server = http.createServer(function (req, res) {
    //HTML head (type of the page)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //HTML content
    res.end(miomodulo.reply(req));
});
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');