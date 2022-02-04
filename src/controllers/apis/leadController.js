const db = require('../../database/models');
const { validationResult } = require ('express-validator');
const nodemailer = require('nodemailer');

module.exports = {
    register : (req , res) => {

        let errors = validationResult(req);
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rodrigoscolnic@gmail.com',
              pass: 'qpvrsxlldtpruroz'
            }
          });

        if(errors.isEmpty()){
            const { lead_name, email , messenge , lead_subject , createdAt} =  req.body
                               
            db.Lead.create({
            lead_name: lead_name ,
            email: email, 
            messenge: messenge,
            lead_subject: lead_subject,
            createdAt: createdAt
            })
                .then(lead => {
                        let leadMail = req.body.email;
                        let leadName = req.body.lead_name;
                        let mailOptions = {
                            from: 'youremail@gmail.com',
                            to: leadMail,
                            subject: 'Bienvenido a MileniumGroup',
                            text: 'hola ' + leadName + ' gracias por tu contacto. a la brevedad nos contactaremos contigo'
                        };
                          
                        transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                            } else {
                              console.log('Email sent: ' + info.response);
                            }
                          });
                        res.redirect('ok')
                }
                )
                .catch(err => console.log(err))

        }
        else {
            res.render('index', { 
                errors: errors.mapped(),
                oldFormData: req.body
            });
        }                    
    },

    ok : ( req , res) =>
        res.render('ok')
}
        
    
