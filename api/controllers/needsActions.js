const crud_needs = require('./needs');
const crud_bank = require('./bank');
const crud_donor = require('../controllers/donor');
const mail = require('../controllers/email');

//Classe de ações das necessidades de sangue
class needsActions{
      
    //Função para salvar necessidade de sangue
    static async needsSave(req, res, next) {

        if (!req.body.bank){
            res.status(400).send('Dados inválido');
            console.log('Dados inválidos');
        }

        try{
                        
            let resultBank = await crud_bank.readOne(req.body.bank);

            let bank = resultBank;
            let APositive = req.body.APositive; 
            let ANegative = req.body.ANegative;
            let BPositive = req.body.BPositive;
            let BNegative = req.body.BNegative;
            let ABPositive = req.body.ABPositive;
            let ABNegative = req.body.ABNegative;
            let OPositive = req.body.OPositive;
            let ONegative = req.body.ONegative;
        
            needsRegister(bank,APositive,ANegative,BPositive,BNegative,ABPositive,ABNegative,OPositive,ONegative);
        
            let resultDonors = await crud_donor.read();

            resultDonors.forEach(donor => {
                
                //Email Donor
                let subject = 'Doe Vida - Novas Necessidades';
                let title = `${donor.name}, foram inseridas novas necessidades de sangue do ${resultBank.name}.`;
                let subtitle = 'Segue abaixo as necessidades de sangue.';
                let content = `A Positivo: ${APositive} litros;<br /> A Negativo: ${ANegative} litros;<br /> B Positivo: ${BPositive} litros;<br /> B Negativo: ${BNegative} litros;<br /> AB Positivo: ${ABPositive} litros;<br /> AB Negativo ${ABNegative} litros;<br /> O Positivo: ${OPositive} litros;<br /> O Negativo: ${ONegative} litros.<br />`;
                content += `<br />O ${resultBank.name} fica no endereço: ${resultBank.address}.<br />`
                content += '<br />Agradecemos seu apoio.'

                mail.createEmail(donor.email, subject, title, subtitle, content);
                console.log(`Email Donor ${donor.name} Ok`);

            });
            
            res.render('./needs/registred.html', {});

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para listar todas as necessidades de sangue em JSON
    static async needsListJson(req, res, next) {
        try{
                
            console.log('Consulting Needs Json');
            let resultNeeds = await crud_needs.read();
            res.send(resultNeeds);

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para buscar uma necessidade de sangue por JSOM
    static async needJson(req, res, next) {
        try{

            let needID = req.body.id;

            console.log('Consulting Need Json');
            let resultNeed = await crud_needs.readOne(needID);

            res.send(resultNeed);

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para deletar uma necessidade de sangue
    static async needsDelete(req, res, next) {
        try{
                
            let needsID = req.body.id;

            console.log('Delete Needs for ID');
            let resultNeed = await crud_needs.delete(needsID);

            res.send(resultNeed);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

}

module.exports = needsActions;

async function needsRegister(bank,APositive,ANegative,BPositive,BNegative,ABPositive,ABNegative,OPositive,ONegative){

	// Insert Need
	let needCreated = await crud_needs.create(bank,APositive,ANegative,BPositive,BNegative,ABPositive,ABNegative,OPositive,ONegative);
	console.log(needCreated);
	console.log('Create Need Ok');
}