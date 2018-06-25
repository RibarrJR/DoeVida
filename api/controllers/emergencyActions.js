const crud_emergency = require('./emergency');
const crud_bank = require('./bank');
const crud_donor = require('../controllers/donor');
const mail = require('../controllers/email');

//Classe de ações das emergências de sangue
class emergencyActions{
      
    //Função para salvar uma nova emergência
    static async emergencySave(req, res, next) {

        if (!req.body.bank){
            res.status(400).send('Dados inválido');
            console.log('Dados inválidos');
        }

        try{
                        
            let resultBank = await crud_bank.readOne(req.body.bank);

            let bank = resultBank;
            let title = req.body.title; 
            let reason = req.body.reason;
            let blood = req.body.blood;
        
            emergencyRegister(bank,title,reason,blood);

            let resultDonors = await crud_donor.read();

            resultDonors.forEach(donor => {
                
                //Email Donor
                let mailSubject = 'Doe Vida - Emergência';
                let mailTitle = `${donor.name}, estamos com uma emergência no ${resultBank.name}.`;
                let mailSubtitle = `${title}`;
                let mailContent = `A urgencia é do sangue: ${blood}.`;
                mailContent += `<br />Motivo: ${reason}.<br />`
                mailContent += `<br />O ${resultBank.name} fica no endereço: ${resultBank.address}.<br />`
                mailContent += '<br />Agradecemos seu apoio.'

                mail.createEmail(donor.email, mailSubject, mailTitle, mailSubtitle, mailContent);
                console.log(`Email Donor ${donor.name} Ok`);

            });
        
            res.render('./emergency/registred.html', {});

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para listar todas as emergências em JSON
    static async emergencyListJson(req, res, next) {
        try{
                
            console.log('Consulting Emergency Json');
            let resultEmergency = await crud_emergency.read();
            res.send(resultEmergency);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para buscar uma emergência em JSON
    static async emergencyJson(req, res, next) {
        try{
                
            let emergencyID = req.body.id;

            console.log('Consulting Emergency Json');
            let resultEmergency = await crud_emergency.readOne(emergencyID);

            res.send(resultEmergency);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para deletar uma emergência
    static async emergencyDelete(req, res, next) {
        try{
                
            let mergencyID = req.body.id;

            console.log('Delete Emergency for ID');
            let resultEmergency = await crud_emergency.delete(mergencyID);

            res.send(resultEmergency);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

}

module.exports = emergencyActions;

async function emergencyRegister(bank,title,reason,blood){

	// Insert Need
	let emergencyCreated = await crud_emergency.create(bank,title,reason,blood);
	console.log(emergencyCreated);
	console.log('Create Emergency Ok');
}