const express = require ('express');
const router = express.Router();
const ongController = require('../controllers/ongController');

//Rutas para gestionar ongs
router.get('/ong/:id', ongController.getOngById);
router.post('/ong', ongController.createOngUser);
router.put('/ong/:id', ongController.updateOngUser);
router.post('/login', ongController.inicioOng);
module.exports = router;