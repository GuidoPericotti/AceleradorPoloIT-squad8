const db = require('../db/db.js');

//Crear nuevo mentor
const createMentor = (req,res) => {
    const {nombre_mentor, apellido_mentor} = req.body;
    const sql = 'INSERT INTO mentores (nombre_mentor, apellido_mentor, dni_mentor, telefono_mentor, edad_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor, tecnologiasec2_mentor, tecnologiasec3_mentor, disponibilidad_mentor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre_mentor, apellido_mentor], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor creado correctamente", idMentor: result.insertId });
    });
};

// Obtener todos los mentores
const getAllMentores = (req, res) => {
    const sql = "SELECT * FROM mentores WHERE disponibildiad = 'true'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Editar los datos de un mentor
const updateMentor = (req, res) => {
    const { id } = req.params;
    const { nombre_mentor, apellido_mentor, dni_mentor, telefono_mentor, edad_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor, tecnologiasec2_mentor, tecnologiasec3_mentor, disponibilidad_mentor} = req.body;
    const sql = "UPDATE mentores SET nombre_mentor = ?, apellido_mentor = ?, dni_mentor = ?, telefono_mentor = ?, edad_mentor = ?, email_mentor = ?, tecnologia_mentor = ?, tecnologiasec1_mentor = ?, tecnologiasec2_mentor = ?, tecnologiasec3_mentor = ?, disponibilidad_mentor = ? WHERE mentor_id = ?";
    db.query(sql, [nombre_mentor, apellido_mentor, dni_mentor, telefono_mentor, edad_mentor, email_mentor, tecnologia_mentor, tecnologiasec1_mentor, tecnologiasec2_mentor, tecnologiasec3_mentor, disponibilidad_mentor, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor actualizada correctamente" });
    });
};

// Eliminar mentor
const deleteMentor = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM mentores WHERE mentor_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Mentor eliminada correctamente" });
    });
};

module.exports = {
    createMentor,
    getAllMentores,
    updateMentor,
    deleteMentor
};