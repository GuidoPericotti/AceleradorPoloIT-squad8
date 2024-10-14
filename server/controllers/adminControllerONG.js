const db = require('../db/db.js');

// Obtener todas las ONG postulantes
const getAllOngPostulantes = (req, res) => {
    const sql = "SELECT * FROM ongs WHERE estado = 'postulante'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Obtener todas las ONG participantes
const getAllOngParticipantes = (req, res) => {
    const sql = "SELECT * FROM ongs WHERE estado = 'participante'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Aceptar una ONG postulante (cambiar su estado a participante)
const acceptOng = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE ongs SET estado = 'participante' WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "ONG aceptada correctamente" });
    });
};

// Rechazar una ONG postulante (eliminar o modificar su estado)
const rejectOng = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE ongs SET estado = 'rechazada' WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "ONG rechazada correctamente" });
    });
};

// Obtener los datos de una ONG por su ID
const getOngById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM ongs WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Editar los datos de una ONG
const updateOng = (req, res) => {
    const { id } = req.params;
    const { nombre_org, password_org, email_org, pais_org, provincia_org, ciudad_org, descripcion_org} = req.body;
    const sql = "UPDATE ongs SET nombre_org = ?, password_org = ?, email_org = ?, pais_org = ?, provincia_org = ?, descripcion_org = ?, telefono_org = ?, instagram_org = ?, facebook_org = ?, twitter_org = ?, web_org = ? WHERE organizacion_id = ?";
    db.query(sql, [nombre_org, password_org, email_org, pais_org, provincia_org, descripcion_org, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "ONG actualizada correctamente" });
    });
};

// Dar de baja una ONG
const deleteOng = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM ongs WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "ONG eliminada correctamente" });
    });
};

module.exports = {
    getAllOngPostulantes,
    getAllOngParticipantes,
    acceptOng,
    rejectOng,
    getOngById,
    updateOng,
    deleteOng
};