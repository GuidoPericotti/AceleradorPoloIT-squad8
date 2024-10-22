const db = require('../db/db.js');

//Obtener todos los usuarios admin
const getAllAdminAccess = (req,res) => {
    const sql = "SELECT * FROM admin_user";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

//Obtener admin por ID
const getAdminById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM admin_user WHERE admin_id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo usuario
const bcrypt = require('bcryptjs');

const createAdminUser = (req, res) => {
    const { email, password } = req.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        const sql = 'INSERT INTO admin_user (email_admin, password_admin) VALUES (?, ?)';
        db.query(sql, [email, hash], function(err, results) {
            if (err) throw err;
            res.json({ mensaje: "Administrador creado correctamente"});
        });
    });
}

//Editar usuario
const updateAdminUser = (req, res) => {
    const {id} = req.params;
    const {email, password} = req.body;
    const sql = 'UPDATE admin_user SET email_admin = ?, password_admin = ? WHERE admin_id = ?';
    db.query(sql,[email, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador actualizado correctamente"});
    });
};

//Eliminar usuario
const deleteAdminUser = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM admin_user WHERE admin_id = ?';
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