const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const adminRoutes = require('../routes/adminRoutes.js');
const cursoRoutes = require('../routes/cursoRoutes.js');
const estudianteRoutes = require('../routes/estudianteRoutes.js');
const ongRoutes = require('../routes/ongRoutes');
const mentorRoutes = require('../routes/mentorRoutes');
const authRoutes = require('../routes/authRoutes.js');  //Login

app.use(express.json());
app.use('/admin_user',adminRoutes);
app.use('/curso',cursoRoutes);
app.use('/estudiante',estudianteRoutes);
app.use('/ong',ongRoutes);
app.use('/mentor',mentorRoutes);
app.use('/auth', authRoutes); //Login

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


//Admin user
const bcrypt = require('bcryptjs');
const db = require('../db/db.js');

async function registerUser(username, password) {
    try {
        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user in bd
        const query = 'INSERT INTO admin_user (user_admin, password_admin) VALUES (?, ?)';
        db.query(query, [username, hashedPassword], (error, results) => {
            if (error) {
                console.error('Error al crear usuario admin', error);
                return;
            }
            console.log('Usuario registrado con ID:', results.insertId);
        });
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
    }
}

registerUser('admin', 'squad8');