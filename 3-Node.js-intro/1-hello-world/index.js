//Libraries
const http = require('http');
 
//create a server
const server = http.createServer(
    function (req, res) {
        //HTML head (type of the page)
        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        //HTML content
        res.write('Hello World.\n');
        res.write('Requested URL : ' + req.url);
        res.end();
    }
);
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');