var mongoose = require('mongoose');
var userModel = require('../models/users');

exports.list = function(req, res) {
  userModel.find(function(err, users){
      res.send(users);
  });
};