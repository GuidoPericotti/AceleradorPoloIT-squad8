const db = require('../db/db.js');

//Obtener todos los cursos
const getAllCursos = (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM cursos";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

//Obtener datos de un curso
const getCursoById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM cursos WHERE curso_id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo curso
const createCurso = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO cursos (nombre_curso, fechaCreacion_curso, fechaCierre_curso, docente_curso,organizacion_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Curso creado correctamente", idCurso: result.insertId});
    });
};

//Editar estudiante
const updateCurso = (req, res) => {
    const {id} = req.params;
    const {nombre, fechaCreacion, fechaCierre, docente} = req.body;
    const sql = 'UPDATE cursos SET nombre = ?, fechaCreacion = ?, fechaCierre = ?, docente = ?';
    db.query(sql,[nombre, fechaCreacion, fechaCierre, docente, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Curso actualizado correctamente"});
    });
};

//Eliminar estudiante

const deleteCurso = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM cursos WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Curso eliminado correctamente"});
    });
};

module.exports = {
    getAllCursos,
    createCurso,
    updateCurso,
    deleteCurso
};