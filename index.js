// Dependencies required
const express = require("express");


// Set up express app
const app = express();

// Initialize routes
app.use('/api', require('./routes/api'));

// Listen for requests
app.listen(process.env.port || 3000, function () {
  console.log("Now listening for requests in 3000 port");
});