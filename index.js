const express = require('express');
const app = express();
const _  = require('lodash');
const mongodb = require('./modules/mongod_connection').MongoClient;
const url = require('./modules/mongod_connection').url;
const listRoutes = require('./routes/routes');
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded());


//  Connect all our routes to our application
app.use('/list', listRoutes);

app.listen(8080, () => {
    console.log('App Successful listening on port 8080');
});

// mongodb.connect(url, function(err, db) {
//     console.log('db is : ',db);
//     if (err) throw err;
//     console.log("Database connected with mongodb!");
// });

// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });