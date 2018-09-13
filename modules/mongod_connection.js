var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/todolist";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
MongoClient.connect(url, function(err, db) {
    function createCollection1 (collectionName) {
        if (err) throw err;
        var dbo = db.db("todolist");
        dbo.createCollection(collectionName, function(err, res) {
          if (err) throw err;
          console.log("Collection created!", res);
          db.close();
        });
    }

    function dropCollection (collectionName) {
        if (err) throw err;
        var dbo = db.db("todolist");
        dbo.dropCollection(collectionName, function(err, res) {
          if (err) console.log(err);
        });
    }

    function insertOne ( record , collectionName ) {
        if (err) throw err;
        var dbo = db.db("todolist");
        dbo.collection(collectionName).insertOne(record, function(err, res) {
            if (err) throw err;
        });
    }

    function insertMany ( records, collectionName ) {
        if (err) throw err;
        var dbo = db.db("todolist");
        dbo.collection(collectionName).insertMany(records, function(err, res) {
            if (err) throw err;
        });
    }
    // createCollection('collection 2');
    // dropCollection('collection 2');
    // insertOne({ name: "Company Inc", address: "Highway 37" }, 'users');
});





module.exports = {
    MongoClient,
    url
}