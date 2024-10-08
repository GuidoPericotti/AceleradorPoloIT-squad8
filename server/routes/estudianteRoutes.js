const express = require ('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

//Rutas para gestionar los estudiantes
router.get('/', estudiantesController.getAllEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.post('/', estudiantesController.createEstudiante);
router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudiante);

module.exports = router;