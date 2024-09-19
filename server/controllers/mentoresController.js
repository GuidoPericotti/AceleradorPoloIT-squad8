const db = require('../db/db.js');

//Obtener todos los mentores de la empresa
const getAllMentores = (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM mentores INNER JOIN empresas ON mentores.empresa_id = empresas.empresa_id WHERE empresas.empresa_id = ?";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};
//Obtener datos de un mentor
const getMentorById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM mentores WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo mentor
const createMentor = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO mentores (nombre_mentor, apellido_mentor, dni_mentor, edad_mentor, telefono_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor,tecnologiasec2_mentor,tecnologiasec3_mentor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor creado correctamente", idMentor: result.insertId});
    });
};

//Editar mentor
const updateMentor = (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, dni, edad, telefono, email, perfil, condicion, disponibilidad} = req.body;
    const sql = 'UPDATE cursos SET nombre_mentor = ?, apellido_mentor = ?, dni_mentor = ?, edad_mentor = ?, telefono_mentor = ?, email_mentor = ?, tecnologia_mentor = ?, tecnologiasec1_mentor = ?,tecnologiasec2_mentor = ?,tecnologiasec3_mentor = ?, disponibilidad = ?';
    db.query(sql,[nombre_mentor, apellido_mentor, dni_mentor, edad_mentor, telefono_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor,tecnologiasec2_mentor,tecnologiasec3_mentor, disponibilidad, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor actualizado correctamente"});
    });
};

//Eliminar Mentor

const deleteMentor = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM mentores WHERE mentor_id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor eliminado correctamente"});
    });
};

module.exports = {
    getAllMentores,
    getMentorById,
    createMentor,
    updateMentor,
    deleteMentor
};