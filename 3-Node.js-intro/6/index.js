//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);


	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the ontent of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var username;
		var password;
		
		//if query is defined and not null
		if ( typeof request.body.username !== 'undefined' && request.body.username)
            //save content of username
			username = request.body.username;
		else 
			username = "not defined";
		
		if ( typeof request.body.password !== 'undefined' && request.body.password)
            //save content of password
    		password = request.body.password;
		else 
			password = "not defined";
			    	
        text = text + "post received: " + username + ", "+ password;
	}
	else
	{
		text = "body undefined";
	}

    response.end(text);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});