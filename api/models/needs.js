const mongoose = require('mongoose');
const bank = require('./bank');
const Schema = mongoose.Schema;

//Model de necessidades de sangue
const needs = new Schema(
    {
        bank: { type: Schema.ObjectId, ref: 'bank', required: true },
        APositive: { type: String, default: '0' },
        ANegative: { type: String, default: '0' },
        BPositive: { type: String, default: '0' },
        BNegative: { type: String, default: '0' },
        ABPositive: { type: String, default: '0' },
        ABNegative: { type: String, default: '0' },
        OPositive: { type: String, default: '0' },
        ONegative: { type: String, default: '0' },
        dateNeed: { type: Date, default: Date.now }
    }
);
  
exports.needs = mongoose.model('needs', needs);
