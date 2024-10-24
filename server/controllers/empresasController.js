const db = require('../db/db.js');

//Obtener datos de usuario
const getEmpresaById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM empresas WHERE id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo usuario empresa
const createEmpresaUser = (req,res) => {
    const {nombre, password} = req.body;
    const sql = 'INSERT INTO empresas (nombre_empresa = ?, password_empresa = ?, email_empresa = ?, pais_empresa = ?, provincia_empresa = ?, descripcion_empresa = ?, telefono_empresa = ?, instagram_empresa = ?, facebook_empresa = ?, twitter_empresa = ?, web_empresa) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Empresa creada correctamente", organizacion_id: result.insertId, fechaCreacion_org: result.insertDate});
    });
};

//Editar usuario
const updateEmpresaUser = (req, res) => {
    const {id} = req.params;
    const {nombre_empresa, password_empresa, email_empresa, pais_org, provincia_org, ciudad_org, descripcion_empresa, telefono_empresa, instagram_empresa, facebook_empresa, twitter_empresa, web_empresa} = req.body;
    const sql = 'UPDATE empresas SET nombre_empresa = ?, password_empresa = ?, email_empresa = ?, pais_empresa = ?, provincia_empresa = ?, descripcion_empresa = ?, telefono_empresa = ?, instagram_empresa = ?, facebook_empresa = ?, twitter_empresa = ?, web_empresa WHERE id = ?';
    db.query(sql,[nombre_empresa, password_empresa, email_empresa, pais_org, provincia_org, descripcion_empresa, telefono_empresa, instagram_empresa, facebook_empresa, twitter_empresa, web_empresa], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Usuario actualizado correctamente"});
    });
};

function inicioEmpresa(req, res) {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM empresas WHERE email_empresa = ?';
        db.query(sql, [email], (err, results) => {
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
            }

            if (results.length === 0) {
                return res.json({ mensaje: 'Usuario Empresa incorrecto' });
            }
            const user = results[0];
            console.log(user.password_empresa,password)
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
    getEmpresaById,
    createEmpresaUser,
    updateEmpresaUser,
    inicioEmpresa,
};