// Dependencies required
const mongoose = require('mongoose');

// Variable to store the schema
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// Create ninja & schema model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  },
  // Attach the GeoSchema
  geometry: GeoSchema
});

// Create the Model - Collecion
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export the model
module.exports = Ninja;