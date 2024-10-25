const express = require ('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//Rutas para gestionar cursos
router.get('/:id/curso', cursosController.getAllCursos);
router.get('/curso/:id', cursosController.getCursoById);
router.post('/curso', cursosController.createCurso);
router.put('/curso/:id', cursosController.updateCurso);
router.delete('/curso/:id', cursosController.deleteCurso);

module.exports = router;