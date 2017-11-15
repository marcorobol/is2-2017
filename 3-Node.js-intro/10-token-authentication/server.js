// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./app/models/user'); // get our mongoose model

// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

mongoose.Promise = global.Promise;
var options = {useMongoClient: true, user: config.database.user, pass: config.database.password};
mongoose.connect(config.database.uri, options); // connect to database

app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =================================================================
// routes ==========================================================
// =================================================================

// setup route to create the first user
app.get('/setup', function(req, res) {

	// create a sample user
	var nick = new User({ 
		name: 'nick', 
		password: 'nick',
		admin: true 
	});
	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});
});

// basic route (http://localhost:8080)
app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router(); 

// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', function(req, res) {

	// find the user
	User.findOne({
		name: req.body.name
	}, function(err, user) {

		if (err) throw err;
		
		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {

				// if user is found and password is right
				// create a token
				var payload = {
					admin: user.admin	
				}
				var options = {
					expiresIn: 86400 // expires in 24 hours
				}
				var token = jwt.sign(payload, app.get('superSecret'), options);

				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			}

		}

	});
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.params.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
});

apiRoutes.route('/users')
.get(function(req, res) {
	User.find({}, function(err, users) {
		res.json(users);
	});
})
.post(function (req, res) {
	var user = new User();
	user.name = req.body.name;
	user.password = req.body.password;
	user.admin = req.body.admin;

	// save the bear and check for errors
	user.save(function (err) {
		if (err) { res.send(err); }
		res.json(user);
	});

})

apiRoutes.route('/users/:user_id')
.delete(function (req, res) {
	User.remove({
		_id: req.params.user_id
	}, function (err, bear) {
		if (err) { res.send(err); }
		res.json({ message: 'Successfully deleted' });
	});
})
.put(function (req, res) {
	User.findById(req.params.user_id, function (err, user) {
		if (err) { res.send(err); }
		// update the bears info
		user.name = req.body.name || user.name;
		user.password = req.body.password || user.password;
		user.admin = req.body.admin;
		// save the bear
		user.save(function (err) {
			if (err) { res.send(err); }
			res.json(user);
		});

	});
});

apiRoutes.get('/check', function(req, res) {
	res.json(req.decoded);
});

// middleware route to support CORS and preflighted requests
app.use(function (req, res, next) {
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    //Support header x-access-token for the authentication token
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});

app.use('/api', apiRoutes);

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
