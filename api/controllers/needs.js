const {needs} = require('../models/needs');

//Classe de CRUD das necessidades de sangue dos bancos
class crud_needs{
    static create(bank,APositive,ANegative,BPositive,BNegative,ABPositive,ABNegative,OPositive,ONegative){
        let newNeed = new needs();
        newNeed.bank = bank;
        newNeed.APositive = APositive;
        newNeed.ANegative = ANegative;
        newNeed.BPositive = BPositive;
        newNeed.BNegative = BNegative;
        newNeed.ABPositive = ABPositive;
        newNeed.ABNegative = ABNegative;
        newNeed.OPositive = OPositive;
        newNeed.ONegative = ONegative;
        newNeed.dateNeed = Date.now();
        return newNeed.save();
    }

    static read(){
        let consult = needs.find({}).sort({dateNeed:'desc'});
        return consult.exec();
    }

    static async readOne(id) {
        let consult = needs.findById(id).lean();
        return consult.exec();
    }

    static async delete(id) {
        let consult = needs.findByIdAndRemove(id).lean();
        return consult.exec();
    }

}
module.exports = crud_needs;