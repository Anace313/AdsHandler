'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var  cors = require('cors');

var app = express();

// server side route for the partials files
app.get('/views/*', function(req, res){
    res.sendFile(path.normalize(__dirname + '/public/views/' + req.params[0]));
})

app.get('/components/*', function(req, res){
    res.sendFile(path.normalize(__dirname + '/public/' + req.params[0]));
})

// everything handled by this route
app.get('/', function(req, res){
    res.sendFile(path.normalize(__dirname +'/public/index.html'));
})

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

// connecting to database
mongoose.connect('mongodb://localhost:27017/adsHandlerDB');

// load ads in data base
require('./services/loadAdsData');

// Api Routing
app.use('/api/ads', require('./api/ads/'));


app.listen(4000);