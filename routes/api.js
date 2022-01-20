// Here will create all the routes for the api

// Dependencies & files required
const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// Get request - Get a list of ninjas from the database
router.get("/ninjas", function (req, res) {
  res.send({ type: "GET" })
});

// Post request - Add a new ninja to the database
router.post("/ninjas", function (req, res) {
  Ninja.create(req.body)
    .then(function (ninja) {
      res.send(ninja);
    });
}); 

// Put request - Update a ninja in the database
router.put("/ninjas/:id", function (req, res) {
  res.send({ type: "PUT" })
}); 

// Delete request - Delete a ninja from the database
router.delete("/ninjas/:id", function (req, res) {
  res.send({ type: "DELETE" })
}); 

// Export the routes
module.exports = router;