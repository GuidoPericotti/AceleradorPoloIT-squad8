const express = require ('express');
const router = express.Router();
const ongController = require('../controllers/empresasController');

//Rutas para gestionar empresas
router.get('/ong:id', empresasController.getOngById);
router.post('/ong', empresasController.createOngUser);
router.put('/ong:id', empresasController.updateOngUser);

module.exports = router;