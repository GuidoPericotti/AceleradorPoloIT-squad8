const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController.js');

//Rutas para gestionar mentores
router.get('/', mentoresController.getAllMentores);
router.get('/:id', mentoresController.getMentorById);
router.post('/', mentoresController.createMentor);
router.put('/:id', mentoresController.updateMentor);
router.delete('/:id', mentoresController.deleteMentor);

module.exports = router;