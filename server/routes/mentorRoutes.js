const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController.js');

//Rutas para gestionar mentores
router.post('/', mentorController.createMentor);
router.get('/', mentorController.getAllMentores);
router.put('/:id', mentorController.updateMentor);
router.delete('/:id', mentorController.deleteMentor);

module.exports = router;