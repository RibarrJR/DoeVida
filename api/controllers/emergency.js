const {emergency} = require('../models/emergency');

//Classe de CRUD das emergencias
class crud_emergency{
    static create(bank,title,reason,blood){
        let newEmergency = new emergency();
        newEmergency.bank = bank;
        newEmergency.title = title;
        newEmergency.reason = reason;
        newEmergency.blood = blood;
        newEmergency.dateEmergency = Date.now();
        return newEmergency.save();
    }

    static read(){
        let consult = emergency.find({}).sort({dateEmergency:'desc'});
        return consult.exec();
    }

    static async readOne(id) {
        let consult = emergency.findById(id).lean();
        return consult.exec();
    }

    static async delete(id) {
        let consult = emergency.findByIdAndRemove(id).lean();
        return consult.exec();
    }

}
module.exports = crud_emergency;