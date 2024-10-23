const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginControllers.js');

router.post('/',loginController.inicioAdmin);
router.post('/',loginController.inicioEmpresa);
router.post('/',loginController.inicioOng);
module.exports = router;