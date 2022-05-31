const mongoose = require('mongoose');

const Tank = mongoose.Schema({
  tankId: { type: Number, },
  name: { type: String, required: true },
  quantity: { type: Number  },
  type: {type: Boolean, required:true},
  species:{type:String},
  foodAmt:{type: String},
  // printDate: Date,
});

module.exports = mongoose.model('tank', Tank);
