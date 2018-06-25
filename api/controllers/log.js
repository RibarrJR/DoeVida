const {log} = require('../models/log');

//Classe de criação e leitura de logs de inicialização
class crud_log{
	static create(description){
        let new_log = new log();
        new_log.description = description;
        let now = new Date;
        new_log.date = now.getDate();
        return new_log.save();
	}

	static read(){
        let consult = log.find({});
        return consult.exec();
	}
}
module.exports = crud_log;