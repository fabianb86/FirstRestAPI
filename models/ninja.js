// Dependencies required
const mongoose = require('mongoose');

// Variable to store the schema
const Schema = mongoose.Schema;

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
  
});

// Create the Model - Collecion
const Ninja = mongoose.model('ninja', NinjaSchema);

// Export the model
module.exports = Ninja;