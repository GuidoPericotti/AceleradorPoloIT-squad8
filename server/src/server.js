const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const adminRoutes = require('../routes/adminRoutes.js');
const cursoRoutes = require('../routes/cursoRoutes.js');
const estudianteRoutes = require('../routes/estudianteRoutes.js');
const ongRoutes = require('../routes/ongRoutes');
const mentorRoutes = require('../routes/mentorRoutes');
const cors = require('cors');
const loginRoutes = require('../routes/loginRoutes.js');

app.use(cors());
app.use(express.json());
app.use('/admin_user',adminRoutes);
app.use('/curso',cursoRoutes);
app.use('/estudiante',estudianteRoutes);
app.use('/ong',ongRoutes);
app.use('/mentor',mentorRoutes);
app.use('/api/login',loginRoutes);

// Rutas de la API
app.post('http://localhost:3000/api/login', loginRoutes)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// Manejar el cierre del servidor
process.on('SIGINT', () => {
    console.log('Cerrando el servidor...');
    db.end((err) => {
        if (err) {
            console.error('Error al cerrar la conexión: ' + err.message);
        } else {
            console.log('Conexión cerrada.');
        }
        process.exit();
    });
});