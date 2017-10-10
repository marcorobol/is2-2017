//Libraries (default)
var http = require('http');

//for templates
var bind = require('bind');
 
//create a server
var server = http.createServer(function (req, res) {
    //bind to template
	bind.toFile(
        'tpl/home.tpl',
        {   address: 'via Roma',
            city: 'Milano',
            resident : true },
        function (data) {
            //write response
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    );
    
});
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');