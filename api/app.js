/* System */

// Modules
const os = require('os');
const cluster = require('cluster');
const http = require('http');
const path = require('path');

// Packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST', 'DELETE']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers');
	next();
});

//Controllers
const crud_log = require('./controllers/log');
const crud_donor = require('./controllers/donor');
const crud_bank = require('./controllers/bank');

//Models
const donor = require('./models/donor');
const log = require('./models/log');

//Routes
const indexRouter = require('./routes/home');
const errorRouter = require('./routes/error');

const donorRegisterRouter = require('./routes/donor/register');
const donorPanelRouter = require('./routes/donor/panel');
const donorListJsonRouter = require('./routes/donor/listJson');
const donorRegistredRouter = require('./routes/donor/registred');
const donorFindRouter = require('./routes/donor/findDonor');
const donorJsonRouter = require('./routes/donor/donorJson');
const donorLoginRouter = require('./routes/donor/loginDonor');
const donorValidationRouter = require('./routes/donor/validationDonor');
const donorUpdateRouter = require('./routes/donor/update');
const donorUpdatedRouter = require('./routes/donor/updated');
const donorDeleteRouter = require('./routes/donor/delete');
const donorDeletedPanelRouter = require('./routes/donor/deleted-panel');
const donorDeletedRouter = require('./routes/donor/deleted');

const bankRegisterRouter = require('./routes/bank/register');
const bankPanelRouter = require('./routes/bank/panel');
const bankListJsonRouter = require('./routes/bank/listJson');
const bankRegistredRouter = require('./routes/bank/registred');
const bankFindRouter = require('./routes/bank/findBank');
const bankJsonRouter = require('./routes/bank/bankJson');
const bankLoginRouter = require('./routes/bank/loginBank');
const bankValidationRouter = require('./routes/bank/validationBank');
const bankUpdateRouter = require('./routes/bank/update');
const bankUpdatedRouter = require('./routes/bank/updated');
const bankDeleteRouter = require('./routes/bank/delete');
const bankDeletedPanelRouter = require('./routes/bank/deleted-panel');
const bankDeletedRouter = require('./routes/bank/deleted');


const needsRegisterRouter = require('./routes/needs/register');
const needsRegistredRouter = require('./routes/needs/registred');
const needsListJsonRouter = require('./routes/needs/listJson');
const needsFindRouter = require('./routes/needs/findNeeds');
const needsJsonRouter = require('./routes/needs/needsJson');
const needsDeleteRouter = require('./routes/needs/delete');
const needsDeletedRouter = require('./routes/needs/deleted');

const emergencyRegisterRouter = require('./routes/emergency/register');
const emergencyRegistredRouter = require('./routes/emergency/registred');
const emergencyListJsonRouter = require('./routes/emergency/listJson');
const emergencyFindRouter = require('./routes/emergency/findEmergency');
const emergencyJsonRouter = require('./routes/emergency/emergencyJson');
const emergencyDeleteRouter = require('./routes/emergency/delete');
const emergencyDeletedRouter = require('./routes/emergency/deleted');


// Log Init
async function initLog(){
	await crud_log.create('Application Ok');
	console.log('Create Ok');
}


/* Application */
async function application(){

	// db
	let db = await mongoose.connect('mongodb://localhost:27017/doe_vida');
	console.log('Conection Ok');

	// view
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.engine('html', require('ejs').renderFile);

	// Public - Static
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.static(path.join(__dirname, 'static')));
	console.log('Statics OK');

	// Routes
	app.use(bodyParser.urlencoded({extended: true}));
	app.use('/', indexRouter);
	app.use('/erro', errorRouter);
	
    app.use('/doador-cadastrar', donorRegisterRouter);
    app.use('/doador-painel', donorPanelRouter);
	app.use('/doador-lista-json', donorListJsonRouter);
	app.use('/doador-registrado', donorRegistredRouter);
	app.use('/doador-busca', donorFindRouter);
	app.use('/doador-json', donorJsonRouter);
	app.use('/doador-login', donorLoginRouter);
	app.use('/doador-validacao', donorValidationRouter);
	app.use('/doador-atualizar', donorUpdateRouter);
	app.use('/doador-atualizado', donorUpdatedRouter);
	app.use('/doador-deletar', donorDeleteRouter);
	app.use('/doador-deletar-painel', donorDeletedPanelRouter);
	app.use('/doador-deletado', donorDeletedRouter);

	app.use('/banco-cadastrar', bankRegisterRouter);
    app.use('/banco-painel', bankPanelRouter);
	app.use('/banco-lista-json', bankListJsonRouter);
	app.use('/banco-registrado', bankRegistredRouter);
	app.use('/banco-busca', bankFindRouter);
	app.use('/banco-json', bankJsonRouter);
	app.use('/banco-login', bankLoginRouter);
	app.use('/banco-validacao', bankValidationRouter);
	app.use('/banco-atualizar', bankUpdateRouter);
	app.use('/banco-atualizado', bankUpdatedRouter);
	app.use('/banco-deletar', bankDeleteRouter);
	app.use('/banco-deletar-painel', bankDeletedPanelRouter);
	app.use('/banco-deletado', bankDeletedRouter);

	app.use('/necessidades', needsRegisterRouter);
	app.use('/necessidade-registrada', needsRegistredRouter);
	app.use('/necessidade-lista-json', needsListJsonRouter);
	app.use('/necessidade-busca', needsFindRouter);
	app.use('/necessidade-json', needsJsonRouter);
	app.use('/necessidade-deletar', needsDeleteRouter);
	app.use('/necessidade-deletada', needsDeletedRouter);

	app.use('/emergencia', emergencyRegisterRouter);
	app.use('/emergencia-registrada', emergencyRegistredRouter);
	app.use('/emergencia-lista-json', emergencyListJsonRouter);
	app.use('/emergencia-busca', emergencyFindRouter);
	app.use('/emergencia-json', emergencyJsonRouter);
	app.use('/emergencia-deletar', emergencyDeleteRouter);
	app.use('/emergencia-deletada', emergencyDeletedRouter);

	 // listen
	 app.listen(8000, 'localhost');

	 // console
	 console.log('localhost:8000');	

	initLog();
}

cluster
if(cluster.isMaster)
	for(let i=0, n=os.cpus().length*1; i<n; i+=1)
		cluster.fork();
else
	application();
