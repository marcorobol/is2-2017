/*globals require, console, process */

var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');

//instantiate express
var app = express();

/* Configure express app to use bodyParser()
 * to parse body as URL encoded data
 * (this is how browser POST form data)
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;


//handle requests on /
app.all('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'Options') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    
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
app.listen(port);

//check status
console.log('Server running at http://localhost:' + port);