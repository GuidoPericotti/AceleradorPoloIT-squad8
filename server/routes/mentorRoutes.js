const express = require('express');
const router = express.Router();
const mentoresController = require('../controllers/mentoresController.js');

//Rutas para gestionar mentores
router.get('/', mentoresController.getAllMentores);
router.get('/:id', mentoresController.getMentorById);
router.post('/', mentoresController.createMentor);
router.put('/:id', mentoresController.updateMentor);
router.delete('/:id', mentoresController.deleteMentor);

module.exports = router;