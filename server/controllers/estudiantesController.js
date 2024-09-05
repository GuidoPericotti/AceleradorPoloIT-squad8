const db = require('../db/db.js');

//Obtener todos los estudiantes
const getAllEstudiantes = (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM estudiantes INNER JOIN cursos ON estudiantes.curso_id = cursos.curso_id WHERE estudiantes.curso_id = ?";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};
//Obtener datos de estudiante
const getEstudianteById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM estudiantes WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo estudiante
const createEstudiante = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO estudiantes (nombre_estudiante, apellido_estudiante, dni_estudiante, edad_estudiante, telefono_estudiante, email_estudiante, curso_id, perfil_id, condicion_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Estudiante creado correctamente", idEstudiante: result.insertId});
    });
};

//Editar estudiante
const updateEstudiante = (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, dni, edad, telefono, email, perfil, condicion, disponibilidad} = req.body;
    const sql = 'UPDATE cursos SET nombre = ?, apellido = ?, dni = ?, edad = ?, telefono = ?, email = ?, perfil = ?, condicion = ?, disponibilidad = ?';
    db.query(sql,[nombre, fechaCreacion, fechaCierre, docente, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Estudiante actualizado correctamente"});
    });
};

//Eliminar estudiante

const deleteEstudiante = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM estudiantes WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Estudiante eliminado correctamente"});
    });
};

module.exports = {
    getAllEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
};