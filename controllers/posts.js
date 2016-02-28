var mongoose = require('mongoose');
var postModel = require('../models/posts');

exports.list = function(req, res) {
  postModel.find(function(err, posts){
    res.send(posts);
  });
};

exports.byUser = function(req, res) {
  mongoose.model('posts').find({user: req.params.userId}, function(err, posts){
    mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
      res.send(posts);
    });
  });
};
