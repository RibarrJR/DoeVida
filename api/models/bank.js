const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Model de banco de sangue
const bank = new Schema(
    {
        name:{type: String, required:true},
        description:{type: String},
        email:{type: String},
        password:{type: String},
        address:{type: String},
        telephone:{type: String}
    }
);
  
exports.bank = mongoose.model('bank', bank);
