var express = require ('express');
var app = express();
var port = process.env.PORT || 8008;
// var port = process.env.PORT || 8008;  // inside config.js
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Running on port ' + port);