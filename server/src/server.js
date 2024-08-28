const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const adminRoutes = require('../routes/adminRoutes.js');

app.use(express.json());
app.use('/admin_user',adminRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});