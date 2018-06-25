const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Model de log de inicialização
const log = new Schema(
    {
        description:{type: String, required:true},
        date:{type: Date, required:true}
    }
);
  
exports.log = mongoose.model('log', log);
