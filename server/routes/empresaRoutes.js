const express = require ('express');
const router = express.Router();
const empresasController = require('../controllers/empresasController');

//Rutas para gestionar empresas
router.get('/empresa/:id', empresasController.getEmpresaById);
router.post('/empresa', empresasController.createEmpresaUser);
router.put('/empresa/:id', empresasController.updateEmpresaUser);
router.post('/login', empresasController.inicioEmpresa);
module.exports = router;