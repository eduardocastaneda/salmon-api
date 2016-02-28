var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
var site = require('./controllers/site');
var users = require('./controllers/users');
var posts = require('./controllers/posts');
var config = require('./config');
var populateDb = require('./db/populateDb');

if('development' == app.get('env')) {
  mongoose.connect(config.devDb);
}

// load models
fs.readdirSync(__dirname + '/models').forEach(function(filename){
  require(__dirname + '/models/' + filename);
});

//route
app.get('/', site.index);
app.get('/users', users.list);
app.get('/posts', posts.list);
app.get('/posts/:userId', posts.byUser);

//populate with start data to db
if(config.populateDb && 'development' == app.get('env')) {
  populateDb.insertFakeData();
}

var port = Number(process.env.port || 3000);
app.listen(port);