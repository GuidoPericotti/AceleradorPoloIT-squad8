const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//Ong Routes
router.get('/', controller.getAllCursos);
router.get('/:id', controller.getCursoById);
router.post('/', controller.createCurso);
router.put('/:id', controller.updateCurso);
router.delete('/:id', controller.deleteCurso);

module.exports = router;