const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Model de doador
const donor=new Schema(
    {
        name:{type: String, required:true},
        email:{type: String, required:true},
        blood:{type: String, required:true},
        password:{type: String, required:true}
    }
);
  
exports.donor = mongoose.model('donor', donor);
