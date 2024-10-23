const db = require('../db/db.js');
const bcrypt = require('bcryptjs');

// Consulta a la base de datos para buscar el usuario
function inicioAdmin(req, res) {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM admin_user WHERE email_admin = ?';
        db.query(sql, [email], (err, results) => {
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
            }

            if (results.length === 0) {
                return res.json({ mensaje: 'Usuario incorrecto' });
            }

            // Obtener el hash de la contraseña del resultado
            const user = results[0];
            const password_hash = user.password_admin;

            // Comparar la contraseña ingresada con el hash almacenado
            bcrypt.compare(password, password_hash, (err, isMatch) => {
                if (err) {
                    return res.json({ mensaje: 'Error al comparar contraseñas' });
                }

                if (isMatch) {
                    return res.json({ success: true });
                } else {
                    return res.json({ mensaje: 'Usuario o contraseña incorrectos' });
                }
            });
        });
    } catch (err) {
        return res.json({ mensaje: 'Error interno al iniciar sesión' });
    }
}

function inicioEmpresa(req, res) {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM empresa WHERE email_empresa = ?';
        db.query(sql, [email, password], (err, results) => {
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
            }

            if (results.length === 0) {
                return res.json({ mensaje: 'Usuario incorrecto' });
            }
            if (results.lenght > 0) {
                const user = results[0];
                if (password === user.password_empresa) {
                    return res.json({ mensaje: 'Inicio de sesión exitoso' });
                } else {
                    return res.json({ mensaje: 'Usuario o contraseña incorrecta'});
                }
            }
        });
    } catch (err) {
        return res.json({ mensaje: 'Error interno al iniciar sesión' });
    }
}

function inicioOng(req, res) {
    const { email, password } = req.body;
    try {
        const sql = 'SELECT * FROM ongs WHERE email_org = ?';
        db.query(sql, [email, password], (err, results) => {
            if (err) {
                console.error('Error en la consulta a la base de datos:', err);
            }

            if (results.length === 0) {
                return res.json({ mensaje: 'Usuario incorrecto' });
            }
            if (results.lenght > 0) {
                const user = results[0];
                if (password === user.password_org) {
                    return res.json({ mensaje: 'Inicio de sesión exitoso' });
                } else {
                    return res.json({ mensaje: 'Usuario o contraseña incorrecta'});
                }
            }
        });
    } catch (err) {
        return res.json({ mensaje: 'Error interno al iniciar sesión' });
    }
}

module.exports = {
    inicioAdmin,
    inicioEmpresa,
    inicioOng,
};