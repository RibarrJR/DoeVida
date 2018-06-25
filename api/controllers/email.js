const nodemailer = require('nodemailer');

//Classe de criação de emails
class email{

    static async createEmail(email, subject, title, subtitle, content){
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtpout.secureserver.net',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'contato@doevida.org', // generated ethereal user
                    pass: 'doevid@123' // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Doe Vida" <contato@doevida.org>', // sender address
                to: email, // list of receivers
                subject: subject, // Subject line
                text: 'Contato Doe Vida', // plain text body
                html: `
                    <h3>${title}</h3>
                    <h4>${subtitle}</h4>
                    <br>
                    <p>${content}</p>   
                    ` // html body
            };
            // let mailOptions = {
            //     from: '"Doe Vida" <contato@doevida.org>', // sender address
            //     to: 'lipems.cc@gmail.com, felipems@outlook.pt, felipe@visionar.io', // list of receivers
            //     subject: 'Doe Vida Contato ✔', // Subject line
            //     text: 'Contato Doe Vida', // plain text body
            //     html: `
            //         <h3>Seja bem vindo!</h3>
            //         <b>Nossa organização sente-se honrada com sua presença.</b>
            //         <br>
            //         <p>Sua incrição é um grande gesto e tem a gratidão de toda nossa comunidade.</p>   
            //         ` // html body
            // };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    };
}
module.exports = email;