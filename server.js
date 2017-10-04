var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
List = require('./src/server/api/models/listModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/interviewdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/server/api/routes/listRoutes'); //importing route
routes(app); //register the routes

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);