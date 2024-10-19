const db = require('../db/db.js');

//Crear nuevo estudiante
const createEstudiante = (req,res) => {
    const {nombre_estudiante, apellido_estudiante} = req.body;
    const sql = 'INSERT INTO estudiantes (nombre_estudiante, apellido_estudiante, dni_estudiante, edad_estudiante, telefono_estudiante, email_estudiante, curso_id, perfil_id, condicion_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre_estudiante, apellido_estudiante], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor creado correctamente", idEstudiante: result.insertId });
    });
};

// Obtener todos los estudiantes
const getAllEstudiantes = (req, res) => {
    const sql = "SELECT * FROM estudiantes WHERE disponibildiad = 'true'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

//Obtener admin por ID
const getEstudiantesById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM estudiantes WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Editar los datos de un estudiante
const updateEstudiante = (req, res) => {
    const { id } = req.params;
    const { nombre_mentor, apellido_mentor, dni_mentor, telefono_mentor, edad_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor, tecnologiasec2_mentor, tecnologiasec3_mentor, disponibilidad_mentor} = req.body;
    const sql = 'UPDATE cursos SET nombre = ?, apellido = ?, dni = ?, edad = ?, telefono = ?, email = ?, perfil = ?, condicion = ?, disponibilidad = ?';
    db.query(sql,[nombre_estudiante, apellido_estudiante, dni_estudiante, edad_estudiante, telefono_estudiante, email_estudiante, curso_id, perfil_id, condicion_id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Estudiante actualizado correctamente"});
    });
};

// Eliminar un estudiante
const deleteEstudiante = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM estudiantes WHERE estudiante_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Estudiante eliminado correctamente" });
    });
};

module.exports = {
    createEstudiante,
    getAllEstudiantes,
    getEstudiantesById,
    updateEstudiante,
    deleteEstudiante
};