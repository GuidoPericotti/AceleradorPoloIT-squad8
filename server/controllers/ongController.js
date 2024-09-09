const db = require('../db/db.js');

//Obtener datos de usuario
const getOngById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM ongs WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo usuario ong
const createOngUser = (req,res) => {
    const {nombre, password} = req.body;
    const sql = 'INSERT INTO ongs (nombre_org, password_org, email_org, pais_org, provincia_org, ciudad_org, descripcion_org, tipoOrg_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Ong creado correctamente", organizacion_id: result.insertId, fechaCreacion_org: result.insertDate});
    });
};

//Editar usuario
const updateOngUser = (req, res) => {
    const {id} = req.params;
    const {nombre, password, pais, provincia, ciudad, descripcion} = req.body;
    const sql = 'UPDATE ongs SET nombre = ?, password = ?, pais = ?, provincia = ?, descripcion = ? WHERE id = ?';
    db.query(sql,[nombre, password, pais, provincia, ciudad, descripcion, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Usuario actualizado correctamente"});
    });
};

module.exports = {
    getOngById,
    createOngUser,
    updateOngUser
};