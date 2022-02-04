const {body} = require ('express-validator')
module.exports = {
    register : [
        body ('lead_name')
            .notEmpty().withMessage ('Ingrese su nombre').bail()
            .isLength({ min:2,}).withMessage ('Su nombre debe ser de al menos 2 letras')
            .isLength({ max:30,}).withMessage ('Su nombre no puede ser mayor a 30 letras'),
        
        body ('email')
            .notEmpty().withMessage ('Ingrese su email').bail()
            .isEmail().withMessage ('Ingresa un email valido'),

        body ('messenge')
            .notEmpty().withMessage ('Ingrese un mensaje').bail()
            .isLength({ min:2,}).withMessage ('El mensaje debe ser de al menos 2 letras')
            .isLength({ max:250,}).withMessage ('El mensaje no puede ser mayor de 250 letras'),

        body ('lead_subject')
            .notEmpty().withMessage ('Ingrese una opcion').bail()
    ]
}