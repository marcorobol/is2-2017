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
mongoose.connect('mongodb://test:test@ds115625.mlab.com:15625/bears', options);
const db = mongoose.connection;
db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;


// get an instance of the express Router
var router = express.Router();

// test route to make sure everything is working
router.get('/', function (req, res) {
    res.json({ message: 'welcome to our api!' });
});

// route /bears
router.route('/bears')

    // create a bear
    // accessed at POST http://localhost:8080/api/bears
    .post(function (req, res) {
        // create a new instance of the Bear model
        var bear = new Bear();
        // set the bears name (comes from the request)
        bear.name = req.body.name;

        // save the bear and check for errors
        bear.save(function (err) {
            if (err) { res.send(err); }
            res.json(bear);
        });

    })
    
    // get all the bears
    // accessed at GET http://localhost:8080/api/bears
    .get(function (req, res) {
        Bear.find(function (err, bears) {
            if (err) { res.send(err); }
            res.json(bears);
        });
    });


// route /bears/bear
router.route('/bears/:bear_id')

    // get the bear with that id
    // (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function (req, res) {
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err) { res.send(err); }
            res.json(bear);
        });
    })

    // update the bear with this id
    // (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function (req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err) { res.send(err); }
            // update the bears info
            bear.name = req.body.name;
            // save the bear
            bear.save(function (err) {
                if (err) { res.send(err); }
                res.json(bear);
            });

        });
    })

    // delete the bear with this id
    // (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function (req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function (err, bear) {
            if (err) { res.send(err); }
            res.json({ message: 'Successfully deleted' });
        });
    });


// middleware route to support CORS and preflighted requests
app.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});

// register our router on /api
app.use('/api', router);

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
