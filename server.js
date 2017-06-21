// set up ========================
import http from 'http';
import express from 'express';
const path = require('path');
const app      = express();                               // create our app w/ express
const port     = process.env.PORT || 8080;                // set the port
import morgan from 'morgan'; // log requests to the console (express4)
import bodyParser from 'body-parser';// pull information from HTML POST (express4)
import methodOverride from 'method-override';// simulate DELETE and PUT (express4)
import mongoose from 'mongoose';// mongoose for mongodb
// Get our API routes
const apiRoutes = require('./app/api/routes');
const servicesRoutes = require('./app/services/routes');

//import db from './app/config/database';
//db.connect();     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/dist'));// set the static files location /public/img will be /img for users
app.use(morgan('dev'));      
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
});                                  
// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Set our api routes
app.use('/api', apiRoutes);

// Set our services routes
app.use('/services', servicesRoutes);

// application -------------------------------------------------------------
app.get('*', function(req, res) {
//res.sendFile(__dirname + '/public/index.html'); // load the single view file
res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// listen (start app with node server.js) ======================================
let server = http.Server(app);
server.listen(port, function(){
   console.log("server is running on http://localhost:" + server.address().port);
});

