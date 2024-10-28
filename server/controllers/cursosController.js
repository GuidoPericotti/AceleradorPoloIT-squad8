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
    const { id } = req.params;
    const idCurso = parseInt(id, 10);
    
    // Verificar si la conversión fue exitosa y si idCurso es un número válido
    if (isNaN(idCurso)) {
        return res.status(400).json({ mensaje: "ID del curso no es válido" });
    }
    console.log(req.body)
    // Leer los datos directamente de req.body
    const { nombre_curso, fechaInicio_curso, fechaCierre_curso, docente_curso, descripcion_curso } = req.body;
    console.log(req.body)
    const sql = 'UPDATE cursos SET nombre_curso = ?, docente_curso = ?, descripcion_curso = ?, fechaInicio_curso = ?, fechaCierre_curso = ? WHERE curso_id = ?';

    // Asegúrate de que el orden de los parámetros sea el correcto
    db.query(sql, [nombre_curso, docente_curso, descripcion_curso, fechaInicio_curso, fechaCierre_curso, idCurso], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ mensaje: "Error en la consulta de actualización" });
        }
        
        console.log(`Ejecutando SQL: ${sql}, con parámetros: [${nombre_curso}, ${docente_curso}, ${descripcion_curso}, ${fechaInicio_curso}, ${fechaCierre_curso}, ${idCurso}]`);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        return res.json({ mensaje: "Curso actualizado correctamente" });
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