const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Función middleware para la verificación del token
module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // Si no existe, respondemos con un error 404
    if (!authHeader) return res.status(404).send({ auth: false, message: 'No token' });
    // Extraemos el token
    const token = authHeader.split(' ')[1];
    // Si no hay token, respondemos con un error 404
    if (!token) return res.status(404).send({ auth: false, message: 'Malformed token' });
    // Verificamos el token utilizando la clave secreta de la configuración
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        // Si hubo un error en la verificación, respondemos con un error 500
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authorization token' });
        // Si la verificación es exitosa, almacenamos el id del usuario decodificado
        req.userId = decoded.id;
        // Llamamos a next() para pasar el control a la siguiente función middleware
        next();
    });
};