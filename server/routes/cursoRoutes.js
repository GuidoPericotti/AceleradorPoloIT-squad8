const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//Rutas para gestionar cursos
router.get('/', cursosController.getAllCursos);
router.get('/:id', cursosController.getCursoById);
router.post('/', cursosController.createCurso);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id', cursosController.deleteCurso);

module.exports = router;