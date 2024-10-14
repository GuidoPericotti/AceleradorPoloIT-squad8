const db = require('../db/db.js');

//Obtener todos los squads
const getAllSquads = (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM squads";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

//Obtener datos de un squad
const getSquadById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM squads WHERE squad_id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo squad
const createCurso = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO squads (desarrollador1_squad, desarrollador2_squad, desarrollador3_squad, desarrollador4_squad, tester_squad, uxui_squad, mentor_squad, squad_id) VALUES (?,?,?,?,?,?,?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Squad creado correctamente", idSquad: result.insertId});
    });
}

//Editar squad
const updateSquad = (req, res) => {
    const {id} = req.params;
    const {desarrollador1, desarrollador2, desarrollador3, desarrollador4, tester, uxui, mentor} = req.body;
    const sql = 'UPDATE squads SET  desarrollador1 = ?, desarrollador2 = ?, desarrollador3 = ?, desarrollador4 = ?, tester = ?, uxui = ?, mentor = ?';
    db.query(sql,[desarrollador1, desarrollador2, desarrollador3, desarrollador4, tester, uxui, mentor, id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Squad actualizado correctamente"});
    });
};

//Eliminar squad

const deleteSquad = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM squads WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Squad eliminado correctamente"});
    });
};

module.exports = {
    getAllsquads,
    getSquadById,
    createsquad,
    updatesquad,
    deletesquad
};