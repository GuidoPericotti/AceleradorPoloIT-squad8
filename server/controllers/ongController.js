const db = require ('../db/db.js')

// Get all ongs
const getAllOngs = (req,res) => {
    const sql = "SELECT * from ongs";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
}

// Create new ong
