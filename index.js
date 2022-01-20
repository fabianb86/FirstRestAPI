// Dependencies required
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Set up express app
const app = express();

// Connect to mongodb (Atlas)
const dbURI =
  "mongodb+srv://restApiUser:Testapi1234@fabiancluster.2zud3.mongodb.net/REST_API?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));


// Body parser middleware
app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Listen for requests
app.listen(process.env.port || 3000, function () {
  console.log("Now listening for requests in 3000 port");
});