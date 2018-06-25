const mongoose = require('mongoose');
const bank = require('./bank');
const Schema = mongoose.Schema;

//Model de emergência de sangue
const emergency = new Schema(
    {
        bank: { type: Schema.ObjectId, ref: 'bank', required: true },
        title: { type: String},
        reason: { type: String},
        blood: { type: String}
    }
);
  
exports.emergency = mongoose.model('emergency', emergency);
