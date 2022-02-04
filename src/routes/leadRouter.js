const express = require('express');
const router = express.Router();
const leadController = require('../controllers/apis/leadController')
const {body} = require ('express-validator')
const validations = require ('../middleware/validations')

router.post('/' , validations.register , leadController.register);
router.get('/ok' , leadController.ok)

module.exports = router;
