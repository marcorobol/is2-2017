/*globals require, console, process */

//Libraries
const http = require('http');
//parse URL
const url = require('url');
//inspect variables
const util = require('util');
//parse Form Data from body
const qs = require('querystring');

//configuration
const hostname = '127.0.0.1';
const port = (process.env.PORT || 80);

//create a server
const server = http.createServer((req, res) => {
    
    //routing examples
    if (request.method === 'GET' && request.url === '/hi') {
        res.setHeader('Content-Type', 'text/plain');
        response.end('Hello!');
    }
    else if (request.method === 'GET' && request.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        
        //parse url
        let url_parts = '';
        url_parts = url.parse(req.url, true);
        
        //parse body
        let bodyBuffer = [];
        let bodyString = '';
        let bodyObj = {};
        req.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            bodyBuffer.push(chunk);
        }).on('end', () => {
            bodyString = Buffer.concat(bodyBuffer).toString();
            // at this point, `bodyString` has the entire request body stored in it as a string
            bodyObj = qs.parse(bodyString);
            // at this point, `bodyObj` has the entire request body stored in it as an object

            //write response
            res.write('Server working properly.' + '\n');
            res.write('url: ' + req.url + '\n');
            res.write('method: ' + req.method.toLowerCase() + '\n');
            res.write('?: ' + util.inspect(url_parts.query) + '\n');
            res.write('?username: '+url_parts.query.username + '\n');
            res.write('body:  ' + bodyString + '\n');
            res.write('body.username: ' + bodyObj.username + '\n');
            //send response
            res.end();

        });
    }
    else {
        response.statusCode = 404;
        response.end();
    }
    
});
 
//listen in a specific port
server.listen(port, hostname);
 
//check status
console.log('Server running at http://' + hostname + ':' + port);