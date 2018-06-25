const {bank} = require('../models/bank');

//Classe de CRUD dos bancos de Sangue
class crud_bank{
    static create(name,description,email,password,address,telephone){
        let newBank = new bank();
        newBank.name = name;
        newBank.description = description;
        newBank.email = email;
        newBank.password = password;
        newBank.address = address;
        newBank.telephone = telephone;
        return newBank.save();
    }

    static read(){
        let consult = bank.find({}).sort({name:'asc'});
        return consult.exec();
    }

    static async readOne(id) {
        let consult = bank.findById(id).lean();
        return consult.exec();
    }

    static async readLogin(email, password) {
        let consult = bank.find({email:email, password:password}).lean();
        return consult.exec();
    }

    static async update(id,name,description,email,password,address,telephone) {
        let bankUpdate = await bank.findById(id);
        bankUpdate.name = name;
        bankUpdate.description = description;
        bankUpdate.email = email;
        bankUpdate.password = password;
        bankUpdate.address = address;
        bankUpdate.telephone = telephone;

        return bankUpdate.save();
    }

    static async delete(id) {
        let consult = bank.findByIdAndRemove(id).lean();
        return consult.exec();
    }
}
module.exports = crud_bank;