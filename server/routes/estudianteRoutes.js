const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/estudiantesController');

//Ong Routes
router.get('/', controller.getAllEstudiantes);
router.get('/:id', controller.getEstudianteById);
router.post('/', controller.createEstudiante);
router.put('/:id', controller.updateEstudiante);
router.delete('/:id', controller.deleteEstudiante);

module.exports = router;