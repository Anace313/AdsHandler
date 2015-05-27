var queryString = require('querystring');
var http = require('http');

// removing all data in database to prevent unique id duplication error every time we restart the server
var Ads = require('./../api/ads/ads.model.js');
Ads.find({}).remove().exec();

// loading data json file
var ads = require('./../data.json');

// inserting Ads data in our database using node http request
for (var i = 0; i < ads.length; i++) {
    var data = queryString.stringify(ads[i]);
    var options = {
        host: 'localhost',
        port: 4000,
        path: '/api/ads',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data)
        }
    };
    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            console.log("body: " + data);
        });
    });
    req.write(data);
    req.end();
}

