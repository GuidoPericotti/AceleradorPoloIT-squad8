const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//Rutas para gestionar cursos
router.get('/:id/curso', cursosController.getAllCursos);
router.get('/:id/curso/:curso_id', cursosController.getCursoById);
router.post('/:id/curso/:id', cursosController.createCurso);
router.put('/:id/curso/:id', cursosController.updateCurso);
router.delete('/curso/:id', cursosController.deleteCurso);

module.exports = router;