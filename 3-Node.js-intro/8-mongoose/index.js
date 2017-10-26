/*globals require, console, process */

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./bear');

// instantiate express
const app = express();

// instantiate mongoose
mongoose.Promise = global.Promise;
var options = {
    useMongoClient: true,
    user: 'test',
    pass: 'test'
  };
mongoose.connect('mongodb://test:test@ds115625.mlab.com:15625/bears', options).then(
    () => { console.log('DB connected successfully!'); },
    err => { console.error(`Error while connecting to DB: ${err.message}`); }
);

// set our port
var port = process.env.PORT || 8080;



// middleware route to support CORS and preflighted requests
app.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});



// home route
app.get('/bears', function (req, res) {
    
    // Get all the bears
    Bear.find(function (err, bears) {
        if (err) { res.send(err); }
        res.json(bears);
    });

});



// home route
app.get('/bears/create/:bearName', function (req, res) {
    
    // Create a bear
    // create a new instance of the Bear model
    var bear = new Bear();
    // set the bears name (comes from the request)
    bear.name = req.params.bearName;
    // save the bear and check for errors
    bear.save(function (err) {
        if (err) { res.send(err); }
    });
    
    res.json(bear);
});



// handle invalid requests and internal error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});



app.listen(port);
console.log('Magic happens on port ' + port);
