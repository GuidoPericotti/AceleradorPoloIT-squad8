const db = require('../db/db.js');

// Obtener todas las empresas postulantes
const getAllEmpresasPostulantes = (req, res) => {
    const sql = "SELECT * FROM empresas WHERE estado = 'postulante'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Obtener todas las empresas participantes
const getAllEmpresasgParticipantes = (req, res) => {
    const sql = "SELECT * FROM empresas WHERE estado = 'participante'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Aceptar una empresas postulante (cambiar su estado a participante)
const acceptEmpresas = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE empresas SET estado = 'participante' WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa aceptada correctamente" });
    });
};

// Rechazar una empresa postulante (eliminar o modificar su estado)
const rejectOng = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE empresas SET estado = 'rechazada' WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa rechazada correctamente" });
    });
};

// Obtener los datos de una empresa por su ID
const getEmpresaById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM empresas WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Editar los datos de una empresa
const updateEmpresa = (req, res) => {
    const { id } = req.params;
    const { nombre_org, password_org, email_org, pais_org, provincia_org, ciudad_org, descripcion_org, telefono_org, instagram_org, facebook_org, twitter_org, web_org} = req.body;
    const sql = "UPDATE empresas SET nombre_org = ?, password_org = ?, email_org = ?, pais_org = ?, provincia_org = ?, ciudad_org = ?, descripcion_org = ?, telefono_org = ?, instagram_org = ?, facebook_org = ?, twitter_org = ?, web_org = ? WHERE organizacion_id = ?";
    db.query(sql, [nombre_org, password_org, email_org, pais_org, provincia_org, ciudad_org, descripcion_org, telefono_org, instagram_org, facebook_org, twitter_org, web_org, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa actualizada correctamente" });
    });
};

// Dar de baja una empresa
const deleteOng = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM empresas WHERE organizacion_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa eliminada correctamente" });
    });
};

module.exports = {
    getAllEmpresasPostulantes,
    getAllEmpresasParticipantes,
    acceptEmpresa,
    rejectEmpresa,
    getEmpresaById,
    updateEmpresa,
    deleteEmpresa
};