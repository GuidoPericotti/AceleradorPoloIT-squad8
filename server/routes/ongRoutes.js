const express = require ('express');
const router = express.Router();
const ongController = require('../controllers/ongController');

//Ong Routes
router.get('/ong:id', ongController.getOngById);
router.post('/ong', ongController.createOngUser);
router.put('/ong:id', ongController.updateOngUser);

module.exports = router;