const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/db');
const config = require('../config/config');

// Registrar nuevo usuario
const register = async (req, res) => {
    const { username, password } = req.body;
    // Asegúrate de que el nombre de usuario no existe
    const existingUser = await db.findUserByUsername(username);
    if (existingUser) return res.status(400).send('Usuario ya existe');
    // Cifrar usando bcrypt
    const hashedPassword = bcrypt.hashSync(password, 8);
    // Nuevo usuario con hash
    const newUser = { username, password: hashedPassword };
    // Guarda el nuevo usuario en DB
    const savedUser = await db.saveUser(newUser);
    const token = jwt.sign({ id: savedUser.admin_id }, config.jwtSecret);
    // Devuelve el token al cliente
    res.status(201).send({ auth: true, token });
};

// Login de usuario
const login = async (req, res) => {
    const { username, password } = req.body;
    // Buscar el usuario en la DB
    const user = await db.findUserByUsername(username);
    // Si no existe, tira error
    if (!user) return res.status(404).send('Usuario no existe');
    // Comparar password con la contraseña hasheada
    const passwordValid = bcrypt.compareSync(password, user.password);
    // Si no es válida, tira error
    if (!passwordValid) return res.status(401).send({ auth: false, token: null });
    // Generar token con ID del usuario
    const token = jwt.sign({ id: user.admin_id }, config.jwtSecret);
    // Enviar token al cliente
    res.status(200).send({ auth: true, token });
};

module.exports = {
    register,
    login,
}