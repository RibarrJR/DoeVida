const {donor} = require('../models/donor');

//Classe de CRUD dos doadores de Sangue
class crud_donor{

    static create(name,email,blood, password){
        let newDonor = new donor();
        newDonor.name = name;
        newDonor.email = email;
        newDonor.blood = blood;
        newDonor.password = password;
        return newDonor.save();
	}

	static read(){
            let consult = donor.find({}).sort({name:'asc'});
            return consult.exec();
        }
        
    static async readOne(id) {
        let consult = donor.findById(id).lean();
        return consult.exec();
    }

    static async readLogin(email, password) {
        let consult = donor.find({email:email, password:password}).lean();
        return consult.exec();
    }

    static async update(id, name, email, blood, password) {
        let donorUpdate = await donor.findById(id);
        donorUpdate.name = name;
        donorUpdate.email = email;
        donorUpdate.blood = blood;
        donorUpdate.password = password;

        return donorUpdate.save();
    }

    static async delete(id) {
        let consult = donor.findByIdAndRemove(id).lean();
        return consult.exec();
    }
}
module.exports = crud_donor;