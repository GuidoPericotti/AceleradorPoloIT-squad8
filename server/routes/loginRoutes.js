const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginControllers.js');

router.post('/admin',loginController.inicioAdmin);
router.post('/empresalogin',loginController.inicioEmpresa);
module.exports = router;