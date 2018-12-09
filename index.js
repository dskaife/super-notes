const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('Server running on port ' + port);
});