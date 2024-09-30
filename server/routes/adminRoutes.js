const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');
const adminOngController = require ('../controllers/adminControllerONG.js');
const adminEmpresasController = require ('../controllers/adminControllerEmpresa.js');
const adminMentoresController = require ('../controllers/adminControllerMentor.js');
const adminControllerCursos = require ('../controllers/adminControllerCursos.js');
const adminControllerEstudiantes = require ('../controllers/adminControllerEstudiantes.js');

//Rutas para gestionar usuarios administradores
router.get('/', adminController.getAllAdminAccess);
router.get('/:id', adminController.getAdminById);
router.post('/', adminController.createAdminUser);
router.put('/:id', adminController.updateAdminUser);
router.delete('/:id', adminController.deleteAdminUser);
//Rutas para gestionar ongs
router.get('/ongs/postulantes', adminOngController.getAllOngPostulantes);
router.get('/ongs/participantes', adminOngController.getAllOngParticipantes);
router.post('/ongs/:id/aceptar', adminOngController.acceptOng);
router.post('/ongs/:id/rechazar', adminOngController.rejectOng);
router.get('/ongs/:id', adminOngController.getOngById);
router.put('/ongs/:id', adminOngController.updateOng);
router.delete('/ongs/:id', adminOngController.deleteOng);
//Rutas para gestionar empresas
router.get('/empresas/postulantes', adminEmpresasController.getAllEmpresasPostulantes);
router.get('/empresas/participantes', adminEmpresasController.getAllEmpresasParticipantes);
router.post('/ongs/:id/aceptar', adminEmpresasController.acceptEmpresa);
router.post('/empresas/:id/rechazar', adminEmpresasController.rejectEmpresa);
router.get('/empresas/:id', adminEmpresasController.getEmpresaById);
router.put('/empresas/:id', adminEmpresasController.updateEmpresa);
router.delete('/empresas/:id', adminEmpresasController.deleteEmpresa);
//Rutas para gestionar mentores
router.get('/mentores', adminMentoresController.getAllMentores);
router.get('/mentores:id', adminMentoresController.getMentorById);
router.post('/', adminMentoresController.createMentor);
router.put('/mentores:id', adminMentoresController.updateMentor);
router.delete('/mentores:id', adminMentoresController.deleteMentor);
//Rutas para gestionar cursos
router.get('/cursos', adminControllerCursos.getAllCursos);
router.get('cursos:id', adminControllerCursos.getCursoById);
router.post('/', adminControllerCursos.createCurso);
router.put('cursos:id', adminControllerCursos.updateCurso);
router.delete('/cursos:id', adminControllerCursos.deleteCurso);
//Rutas para gestionar estudiantes
router.get('/estudiantes',adminControllerEstudiantes.getAllEstudiantes);
router.get('estudiantes:id',adminControllerEstudiantes.getEstudiantesById);
router.post('/',adminControllerEstudiantes.createEstudiante);
router.put('estudiantes:id',adminControllerEstudiantes.updateEstudiante);
router.delete('estudiantes:id',adminControllerEstudiantes.deleteEstudiante);

module.exports = router;