const crud_bank = require('../controllers/bank');
const mail = require('../controllers/email');

//Classe de ações dos bancos de Sangue
class bankActions{
    
    //Função para Salvar um novo banco de sangue
    static async bankSave(req, res, next) {

        if (!req.body.name || !req.body.email){
            res.status(400).send('Dados inválido');
            console.log('Dados inválidos');
        }
        
        try {
            
            let bankName = req.body.name;
            let bankDescription = req.body.description;
            let bankEmail = req.body.email;
            let bankPassword = req.body.password;
            let bankAddress = req.body.address;
            let bankTelephone = req.body.telephone;

            bankRegister(bankName,bankDescription,bankEmail,bankPassword,bankAddress,bankTelephone);
        
            res.render('./bank/registred.html', {});

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para carregar o painel de bancos de sangue
    static async bankPanel(req, res, next) {
        try{

            console.log('Consulting Banks');
            let resultBanks = await crud_bank.read();
            res.render('./bank/panel.html', { banks: resultBanks });

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para listar todos bancos de sangue em JSON
    static async bankListJson(req, res, next) {
        try{
            console.log('Consulting Banks Json');
            let resultBanks = await crud_bank.read();

            res.send(resultBanks);

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para buscar um banco de sangue em JSON
    static async bankJson(req, res, next) {
        try{
            let bankID = req.body.id;

            console.log('Consulting Banks Json');
            let resultBanks = await crud_bank.readOne(bankID);

            res.send(resultBanks);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para login dos bancos de sangue
    static async bankLogin(req, res, next) {
        try{    
            let bankEmail = req.body.email;
            let bankPassword = req.body.password;

            console.log('Consulting Bank Json for Login');

            console.log(bankEmail)
            console.log(bankPassword)
            let resultBanks = await crud_bank.readLogin(bankEmail, bankPassword);

            console.log(resultBanks)
            res.send(resultBanks);
        
        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
		
    }
    
    //Função para atualizar dados do banco de sangue
    static async bankUpdate(req, res, next) {

        if (!req.body.id){
            res.status(400).send('Dados inválido');
            console.log('Dados inválidos');
        }

        try{
        
            let bankID = req.body.id;
            let bankName = req.body.name;
            let bankDescription = req.body.description;
            let bankEmail = req.body.email;
            let bankPassword = req.body.password;
            let bankAddress = req.body.address;
            let bankTelephone = req.body.telephone;
        
            bankUpdate(bankID,bankName,bankDescription,bankEmail,bankPassword,bankAddress,bankTelephone);
        
            res.render('./bank/updated.html', { 
                title: 'Atualização de Banco'
            });

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
    }

    //Função para deletar algum banco de sangue
    static async bankDelete(req, res, next) {
        try{
                
            let bankID = req.body.id;

            console.log('Delete Donors for ID');
            let resultBank = await crud_bank.delete(bankID);

            //Email Bank
            let subject = 'Tchau Doe Vida';
            let title = `${resultBank.name}, sua conta foi removida con com sucesso.`;
            let subtitle = 'Agradecemos pelo tempo de vincúlo com nossa comunidade.';
            let content = 'Atenciosamente, Doe Vida.';

            mail.createEmail(resultBank.email, subject, title, subtitle, content);
            console.log('Email Bank Ok');

            res.send(resultBank);

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}
    
    //Função para deletar algum banco de sangue através do painel
	static async bankDeletePanel(req, res, next) {

        try{
                
            let bankID = req.body.id;

            console.log('Delete Donors for ID');
            let resultBank = await crud_bank.delete(bankID);

            //Email Bank
            let subject = 'Tchau Doe Vida';
            let title = `${resultBank.name}, sua conta foi removida con com sucesso.`;
            let subtitle = 'Agradecemos pelo tempo de vincúlo com nossa comunidade.';
            let content = 'Atenciosamente, Doe Vida.';

            mail.createEmail(resultBank.email, subject, title, subtitle, content);
            console.log('Email Bank Ok');

            console.log('Consulting Banks');
            let resultBanks = await crud_bank.read();
            res.render('../views/bank/panel.html', {banks:resultBanks});

        } catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}
}

module.exports = bankActions;

async function bankRegister(n,d,e,p,a,t){

	// Insert Bank
	let bankCreated = await crud_bank.create(n,d,e,p,a,t);
	console.log(bankCreated);
	console.log('Create Bank Ok');
}

async function bankUpdate(i,n,d,e,p,a,t){

	// Update Bank
	let bankUpdate = await crud_bank.update(i,n,d,e,p,a,t);
	console.log(bankUpdate);
	console.log('Update Bank Ok');
}