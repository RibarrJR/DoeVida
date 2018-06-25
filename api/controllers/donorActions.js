const crud_donor = require('../controllers/donor');
const mail = require('../controllers/email');

//Classe de ações dos doadores de Sangue
class donorActions{

	//Função para salvar um novo doador
	static async donorSave(req, res, next) {

		if (!req.body.name || !req.body.email || !req.body.blood){
			res.status(400).send('Dados inválido');
			console.log('Dados inválidos');
		}

		try {
				
			let donorName = req.body.name;
			let donorEmail = req.body.email;
			let donorBlood = req.body.blood;
			let donorPassword = req.body.password;

			donorRegister(donorName,donorEmail,donorBlood, donorPassword);

			//Email Donor
			let subject = 'Confirmação Doe Vida';
			let title = `${donorName}, seja bem vindo à nossa plataforma`;
			let subtitle = 'Nossa organização sente-se honrada com sua presença.';
			let content = 'Sua incrição é um grande gesto e tem a gratidão de toda nossa comunidade.';
			content += `<br />Segue abaixo seus dados cadastrados:<br />Nome: ${donorName};<br />Email: ${donorEmail};<br />Sangue: ${donorBlood};<br />Senha: ${donorPassword}.`;

			mail.createEmail(donorEmail, subject, title, subtitle, content);
			console.log('Email Donor Ok');

			res.render('./donor/registred.html', {});

		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para carregar o painel de doadores
	static async donorPanel(req, res, next) {
		try{ 
				
			console.log('Consulting Donors');
			let resultDonors = await crud_donor.read();
			res.render('../views/donor/panel.html', {donors:resultDonors});
		
		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para carregar todos os doadores em JSON
	static async donorListJson(req, res, next) {
		try{
				
			console.log('Consulting Donors Json');
			let resultDonors = await crud_donor.read();

			res.send(resultDonors);

		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para buscar um doador em JSON
	static async donorJson(req, res, next) {
		try{

			let donorID = req.body.id;

			console.log('Consulting Donors Json for ID');
			let resultDonors = await crud_donor.readOne(donorID);

			res.send(resultDonors);
		
		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para login do doador
	static async donorLogin(req, res, next) {
		try{

			let donorEmail = req.body.email;
			let donorPassword = req.body.password;

			console.log('Consulting Donors Json for Login');

			console.log(donorEmail)
			console.log(donorPassword)
			let resultDonors = await crud_donor.readLogin(donorEmail, donorPassword);

			console.log(resultDonors)
			res.send(resultDonors);	
		
		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para atualizar doador
	static async donorUpdate(req, res, next) {

		if (!req.body.id ){
			res.status(400).send('Dados inválido');
			console.log('Dados inválidos');
		}

		try{
				
			console.log(req.body);

			let donorID = req.body.id;
			let donorName = req.body.name;
			let donorEmail = req.body.email;
			let donorBlood = req.body.blood;
			let donorPassword = req.body.password;

			donorUpdate(donorID,donorName,donorEmail,donorBlood, donorPassword);

			//Email Donor
			let subject = 'Atualização Doe Vida';
			let title = `${donorName}, seus dados foram atualizados com sucesso.`;
			let subtitle = 'Obrigado por manter seus dados atualizados.';
			subtitle += `Segue abaixo a relação atual dos seus dados: <br />`
			subtitle += `Nome: ${donorName};<br />Email: ${donorEmail};<br />Sangue: ${donorBlood};<br />Senha: ${donorPassword}. `
			let content = 'Atenciosamente, Doe Vida.';

			mail.createEmail(donorEmail, subject, title, subtitle, content);
			console.log('Email Donor Ok');

			res.render('./donor/updated.html', { 
				title: 'Registro de Doador'
			});

		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}

	//Função para deletar doador
	static async donorDelete(req, res, next) {
		try{
				
			let donorID = req.body.id;

			console.log('Delete Donors for ID');
			let resultDonors = await crud_donor.delete(donorID);

			//Email Donor
			let subject = 'Tchau Doe Vida';
			let title = `${resultDonors.name}, sua conta foi removida con com sucesso.`;
			let subtitle = 'Agradecemos pelo tempo de vincúlo com nossa comunidade.';
			let content = 'Atenciosamente, Doe Vida.';

			mail.createEmail(resultDonors.email, subject, title, subtitle, content);
			console.log('Email Donor Ok');

			res.send(resultDonors);
		
		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}
	
	//Função para deletar doador através do painel
	static async donorDeletePanel(req, res, next) {
		try{

			let donorID = req.body.id;

			console.log('Delete Donors for ID');
			let resultDonor = await crud_donor.delete(donorID);

			console.log(resultDonor)

			//Email Donor
			let subject = 'Tchau Doe Vida';
			let title = `${resultDonor.name}, sua conta foi removida com sucesso.`;
			let subtitle = 'Agradecemos pelo tempo de vincúlo com nossa comunidade.';
			let content = 'Atenciosamente, Doe Vida.';

			mail.createEmail(resultDonor.email, subject, title, subtitle, content);
			console.log('Email Donor Ok');

			console.log('Consulting Donors');
			let resultDonors = await crud_donor.read();
			res.render('../views/donor/panel.html', {donors:resultDonors});

		} catch (error) {
            console.log(error);
            res.render('./error.html', {error: error});
        }
	}
};

module.exports = donorActions;

async function donorRegister(n,e,b,p){
	// Insert Donor
	let donorCreated = await crud_donor.create(n,e,b,p);
	console.log(donorCreated);
	console.log('Create Donor Ok');
}

async function donorUpdate(i,n,e,b,p){
	// Update Donor
	let donorUpdate = await crud_donor.update(i,n,e,b,p);
	console.log(donorUpdate);
	console.log('Update Donor Ok');
}