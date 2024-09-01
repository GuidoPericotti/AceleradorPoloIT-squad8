const db = require('../db/db.js');

const getAllAdminAccess = (req,res) => {
    const sql = "SELECT * FROM admin_user";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getAdminById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM admin_user WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createAdminUser = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO admin_user (user, password) VALUES (?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador creado correctamente", idAdmin: result.insertId });
    });
};

const updateAdminUser = (req, res) => {
    const {id} = req.params;
    const {user, password} = req.body;
    const sql = 'UPDATE admin_user SET user = ?, password = ? WHERE id = ?';
    db.query(sql,[user, password, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador actualizado correctamente"});
    });
};

const deleteAdminUser = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM admin_user WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador eliminado correctamente"});
    });
};

module.exports = {
    getAllAdminAccess,
    getAdminById,
    createAdminUser,
    updateAdminUser,
    deleteAdminUser
};