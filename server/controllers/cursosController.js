const db = require('../db/db.js');

//Obtener todos los cursos
const getAllCursos = (req,res) => {
    const {id} = req.params;
    console.log(id);
    const sql = "SELECT * FROM cursos WHERE organizacion_id = ?";
    db.query(sql, [id], (err,results) => {
        if (err) throw err;
        res.json({cursos: results});
        console.log(results);
        console.log(id);
    });
};
//Obtener datos de curso
const getCursoById = (req,res) => {
    const {curso_id} = req.params;
    const sql = 'SELECT * FROM cursos WHERE curso_id = ?';
    db.query(sql,[curso_id], (err, result) => {
        if (err) throw err;
        res.json(result);
        console.log(curso_id);
    });
};

//Crear nuevo curso
const createCurso = (req,res) => {
    const {user, password} = req.body;
    const sql = 'INSERT INTO cursos (nombre_curso, fechaCreacion_curso, fechaCierre_curso, docente_curso,organizacion_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [user, password], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Curso creado correctamente", idCurso: result.insertId});
    });
};

//Editar curso
const updateCurso = (req, res) => {
    const {id} = req.params;
    const idCurso = parseInt(id, 10);
     // Verificar si la conversión fue exitosa y si idCurso es un número válido
     if (isNaN(idCurso)) {
        return res.status(400).json({ mensaje: "ID del curso no es válido" });
    }

    const {nombre_curso, fechaInicio_curso, fechaCierre_curso, docente_curso, descripcion_curso, organizacion_id} = req.body;
    const sql = 'UPDATE cursos SET nombre_curso = ?, fechaInicio_curso = ?, fechaCierre_curso = ?,  descripcion_curso = ?,docente_curso = ? WHERE curso_id = ?';
    db.query(sql,[ nombre_curso, fechaInicio_curso, fechaCierre_curso,  descripcion_curso,docente_curso, organizacion_id , id] ,(err, result) => {
        if (err) throw err;
        console.log(`Ejecutando SQL: ${sql}, con parámetros: [${nombre_curso}, ${fechaInicio_curso}, ${fechaCierre_curso}, ${docente_curso},${descripcion_curso}, ${idCurso},${organizacion_id}]`);
        res.json({ mensaje: "Curso actualizado correctamente"});
        console.log(result)
       // console.log(nombre_curso, fechaInicio_curso, fechaCierre_curso, docente_curso, descripcion_curso, organizacion_id)
        
       if (result.affectedRows === 0) {
        return { mensaje: "Curso no encontrado" };
    }

    res.json({ mensaje: "Curso actualizado correctamente" });
});
};

//Eliminar curso

const deleteCurso = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM cursos WHERE id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Curso eliminado correctamente"});
    });
};

module.exports = {
    getAllCursos,
    getCursoById,
    createCurso,
    updateCurso,
    deleteCurso
};