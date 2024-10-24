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
    const sql = 'INSERT INTO ongs (nombre_org, password_org, email_org, pais_org, provincia_org, descripcion_org, tipoOrg_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
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

function inicioOng(req, res) {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM ongs WHERE email_org = ?';
        db.query(sql, [email], (err, results) => {
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
            }

            if (results.length === 0) {
                return res.json({ mensaje: 'Usuario ONG incorrecto' });
            }
            const user = results[0];
            console.log(user.password_org,password)
            if (password === user.password_org) {
                return res.json({ success: true, message: 'Inicio de sesión exitoso' });
            } else {
                return res.json({ success: true, message: 'Usuario o contraseña incorrecta'});
            }
        });
    } catch (err) {
        return res.json({ mensaje: 'Error interno al iniciar sesión' });
    }
}


module.exports = {
    getOngById,
    createOngUser,
    updateOngUser,
    inicioOng,
};