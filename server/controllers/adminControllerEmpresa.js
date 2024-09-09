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
const getAllEmpresasParticipantes = (req, res) => {
    const sql = "SELECT * FROM empresas WHERE estado = 'participante'";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Aceptar una empresa postulante (cambiar su estado a participante)
const acceptEmpresa = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE empresas SET estado = 'participante' WHERE empresa_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa aceptada correctamente" });
    });
};

// Rechazar una empresa postulante (eliminar o modificar su estado)
const rejectEmpresa = (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE empresas SET estado = 'rechazada' WHERE empresa_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa rechazada correctamente" });
    });
};

// Obtener los datos de una empresa por su ID
const getEmpresaById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM empresas WHERE empresa_id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Editar los datos de una empresa
const updateEmpresa = (req, res) => {
    const { id } = req.params;
    const { nombre_empresa, password_empresa, email_empresa, pais_org, provincia_org, ciudad_org, descripcion_empresa} = req.body;
    const sql = "UPDATE empresas SET nombre_empresa = ?, password_empresa = ?, email_empresa = ?, pais_empresa = ?, provincia_empresa = ?, ciudad_empresa = ?, descripcion_empresa = ?, telefono_empresa = ?, instagram_empresa = ?, facebook_empresa = ?, twitter_empresa = ?, web_empresa = ? WHERE organizacion_id = ?";
    db.query(sql, [nombre_empresa, password_empresa, email_empresa, pais_org, provincia_org, ciudad_org, descripcion_empresa, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa actualizada correctamente" });
    });
};

// Dar de baja una empresa
const deleteEmpresa = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM empresas WHERE empresa_id = ?";
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