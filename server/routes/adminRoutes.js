const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');
const adminOngController = require ('../controllers/adminControllerONG.js');

//Rutas para gestionar usuarios administradores
router.get('/', adminController.getAllAdminAccess);
router.get('/:id', adminController.getAdminById);
router.post('/', adminController.createAdminUser);
router.put('/:id', adminController.updateAdminUser);
router.delete('/:id', adminController.deleteAdminUser);
//Rutas para gestionar ongs
router.get('/ongs/postulantes', adminOngController.getAllOngPostulantes);
router.get('/ongs/participantes', adminOngController.getAllOngParticipantes);
router.post('/ongs/:id/aceptar', adminOngController.acceptOng);
router.post('/ongs/:id/rechazar', adminOngController.rejectOng);
router.get('/ongs/:id', adminOngController.getOngById);
router.put('/ongs/:id', adminOngController.updateOng);
router.delete('/ongs/:id', adminOngController.deleteOng);

module.exports = router;