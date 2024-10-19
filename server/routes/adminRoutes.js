const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');
const adminOngController = require ('../controllers/adminControllerONG.js');
const adminEmpresasController = require ('../controllers/adminControllerEmpresa.js');
const adminMentoresController = require ('../controllers/adminControllerMentor.js');

const adminCursosController = require ('../controllers/adminControllerCursos.js');
const adminEstudiantesController = require ('../controllers/adminControllerEstudiantes.js');
const adminSquadsController = require ('../controllers/adminControllerSquad.js')


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
router.get('/cursos', adminCursosController.getAllCursos);
router.get('/cursos:id', adminCursosController.getCursosById);
router.post('/', adminCursosController.createCurso);
router.put('/cursos:id', adminCursosController.updateCurso);
router.delete('/cursos:id', adminCursosController.deleteCurso);
//Rutas para gestionar estudiantes
router.get('/estudiantes',adminEstudiantesController.getAllEstudiantes);
router.get('/estudiantes:id',adminEstudiantesController.getEstudianteById);
router.post('/',adminControllerEstudiantes.createEstudiante);
router.put('/estudiantes:id',adminControllerEstudiantes.updateEstudiante);
router.delete('/estudiantes:id',adminControllerEstudiantes.deleteEstudiante);
// Rutas para gestionar squads
router.get('/squads', adminSquadsController.getAllsquads);
router.get('/squads:id', adminSquadsController.getSquadById);
router.post('/', adminSquadsController.createsquad);
router.put('/squads:id', adminSquadsController.updatesquad);
router.delete('/squads:id', adminSquadsController.deletesquad);


module.exports = router;