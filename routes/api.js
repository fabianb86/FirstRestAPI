// Here will create all the routes for the api

// Dependencies & files required
const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// Get request - Get a list of ninjas from the database
router.get("/ninjas", function (req, res, next) {
  // Find ninjas near to the location that we specified
  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        },
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true,
      },
    },
  ])
    .then(function (ninjas) {
      res.send(ninjas);
    })
    .catch(next);
});

// Post request - Add a new ninja to the database
router.post("/ninjas", function (req, res, next) {
  Ninja.create(req.body)
    .then(function (ninja) {
      res.send(ninja);
    }).catch(next);
}); 

// Put request - Update a ninja in the database
router.put("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
      res.send(ninja);
    });
  });
}); 

// Delete request - Delete a ninja from the database
router.delete("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  });
}); 

// Export the routes
module.exports = router;