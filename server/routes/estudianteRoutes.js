const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/estudiantesController');

//Ong Routes
router.get('/', cursosController.getAllEstudiantes);
router.get('/:id', cursosController.getEstudianteById);
router.post('/', cursosController.createEstudiante);
router.put('/:id', cursosController.updateEstudiante);
router.delete('/:id', cursosController.deleteEstudiante);

module.exports = router;