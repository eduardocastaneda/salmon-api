var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var config = require('../config');

var insertToCollections = function(db, callback) {
  db.collection('users').insertMany([
    { account: "eddo", name : "Eduardo Castaneda", email : "eddo@turnleft.se" },
    { account: "sammi", name : "Sammi Haj Hassine", email : "sam@test.se" }
  ], function(err, result) {
    assert.equal(err, null);
    console.log("-- Inserted two users --");
    db.collection('posts').insertMany([
      { content: "en post 123", user : result.insertedIds[0] },
      { content: "post nummer 2", user : result.insertedIds[0] },
      { content: "testar en till post", user : result.insertedIds[1] },
    ], function(err, result) {
      assert.equal(err, null);
      console.log("-- Inserted three posts by current users --");
      callback();
    });

  });
};

var insertFakeData = function(){
  MongoClient.connect(config.devDb, function(err, db) {
  assert.equal(null, err);
    insertToCollections(db, function() {
        db.close();
    });
  })
};

module.exports.insertFakeData = insertFakeData;