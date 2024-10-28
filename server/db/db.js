const mysql = require('mysql2');

//Create connection with the server
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: ''
});

//Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos. ',err);
        return;
    }
    console.log('Conexión con la base de datos exitosa.');

//Check bd exist
connection.query("SHOW DATABASES LIKE 'acelerador_db'", (err, results) => {
    if (err) {
        console.error('Error al comprobar la existencia de la base de datos. ', err);
        return;
    }

    if (results.length > 0) {
        console.log('La base de datos ya existe.');
        useDBandRunQueries();
    } else {
        //Create bd if not exist
        connection.query("CREATE DATABASE acelerador_db", (err, results) => {
            if (err) {
                console.error('Error al crear la base de datos. ', err);
                return;
            }
            console.log('Base de datos creada con éxito.');
            useDBandRunQueries();
        });
    }
    });
});

function useDBandRunQueries() {
    // Select bd for use
    connection.query('USE acelerador_db', (err) => {
        if (err) {
            console.error('Error al seleccionar Acelerador_DB. ',err);
            return;
        }
        console.log('Base de datos seleccionada correctamente.');
        // Call function to run queries
        runAllQueries();
    });
}

    //Create tables

    //Create table admin_user
    const sqlCreateTableAdmin = `
        CREATE TABLE IF NOT EXISTS admin_user (
        admin_id INT AUTO_INCREMENT PRIMARY KEY,
        email_admin VARCHAR(50) NOT NULL UNIQUE,
        password_admin VARCHAR(255) NOT NULL
    )`;

    //Create table tipoOrg
        const sqlCreateTableTipoOrg = `
        CREATE TABLE IF NOT EXISTS TipoOrg(
        tipoOrg_id INT AUTO_INCREMENT PRIMARY KEY,
        nombreTipo_org VARCHAR (50) UNIQUE
    )`
    
    //Create Table ongs
        const sqlCreateTableOngs = `
            CREATE TABLE IF NOT EXISTS ongs(
            organizacion_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_org VARCHAR (50) NOT NULL UNIQUE,
            password_org VARCHAR(50) NOT NULL,
            email_org VARCHAR(50) NOT NULL UNIQUE,
            pais_org VARCHAR (50) NOT NULL,
            provincia_org VARCHAR(50) NOT NULL,
            descripcion_org VARCHAR(150),
            telefono_org INT (10) NOT NULL,
            instagram_org VARCHAR (50) NOT NULL,
            facebook_org VARCHAR (50) NOT NULL,
            twitter_org VARCHAR (50) NOT NULL,
            web_org VARCHAR (50) NOT NULL,
            Creacifechaon_org DATETIME DEFAULT CURRENT_TIMESTAMP(),
            tipoOrg_id INT NOT NULL,
            FOREIGN KEY (tipoOrg_id) REFERENCES tipoOrg (tipoOrg_id)
    )`;

    //Create table cursos
    const sqlCreateTableCursos = `
            CREATE TABLE IF NOT EXISTS cursos(
            curso_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_curso VARCHAR (50),
            organizacion_id INT NOT NULL,
            docente_curso VARCHAR(50) NOT NULL,
            descripcion_curso VARCHAR(150),
            fechaInicio_curso DATE NOT NULL,
            fechaCierre_curso DATE NOT NULL,
            FOREIGN KEY (organizacion_id) REFERENCES ongs (organizacion_id)
    )`;

    //Create table perfiles
    const sqlCreateTablePerfiles = `
            CREATE TABLE IF NOT EXISTS perfiles(
            perfil_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_perfil VARCHAR (50) NOT NULL UNIQUE
    )`;

    //Create table condiciones
    const sqlCreateTableCondiciones = `
            CREATE TABLE IF NOT EXISTS condiciones(
            condicion_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_condicion VARCHAR (50) NOT NULL UNIQUE
    )`;

    //Create table estudiantes
    const sqlCreateTableEstudiantes = `
            CREATE TABLE IF NOT EXISTS estudiantes(
            estudiante_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_estudiante VARCHAR(50) NOT NULL,
            apellido_estudiante VARCHAR(50) NOT NULL,
            dni_estudiante VARCHAR(8) NOT NULL UNIQUE,
            telefono_estudiante VARCHAR(10) NOT NULL UNIQUE,
            edad_estudiante INT NOT NULL,
            email_estudiante VARCHAR(50) NOT NULL UNIQUE,
            disponibilidad_estudiante BOOLEAN DEFAULT false,
            perfil_id INT NOT NULL,
            condicion_id INT NOT NULL,
            curso_id INT NOT NULL,
            FOREIGN KEY (curso_id) REFERENCES cursos (curso_id),
            FOREIGN KEY (perfil_id) REFERENCES perfiles (perfil_id),
            FOREIGN KEY (condicion_id) REFERENCES condiciones (condicion_id)
    )`;

    //Create Table empresas
    const sqlCreateTableEmpresas = `
            CREATE TABLE IF NOT EXISTS empresas(
            empresa_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_empresa VARCHAR (50) NOT NULL UNIQUE,
            email_empresa VARCHAR(50) NOT NULL UNIQUE,
            password_empresa VARCHAR(50) NOT NULL,   
            pais_empresa VARCHAR (50) NOT NULL,
            provincia_empresa VARCHAR(50) NOT NULL,        
            descripcion_empresa VARCHAR(150),
            telefono_empresa INT (10) NOT NULL,
            instagram_empresa VARCHAR (50) NOT NULL,
            facebook_empresa VARCHAR (50) NOT NULL,
            twitter_empresa VARCHAR (50) NOT NULL,
            web_empresa VARCHAR (50) NOT NULL,
            fechaCreacion_empresa DATETIME DEFAULT CURRENT_TIMESTAMP(),
            tipoOrg_id INT NOT NULL,
            FOREIGN KEY (tipoOrg_id) REFERENCES tipoOrg (tipoOrg_id)
    )`;

    //Create table especializacion
    const sqlCreateTableEspecializacion = `
            CREATE TABLE IF NOT EXISTS especializacion(
            especializacion_id INT AUTO_INCREMENT PRIMARY KEY
        )`;

    //Create table tecnologias
    const sqlCreateTableTecnologias = `
            CREATE TABLE IF NOT EXISTS tecnologias(
            tecnologia_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_tecnologia VARCHAR(50) NOT NULL UNIQUE,
            especializacion_id INT NOT NULL,
            FOREIGN KEY (especializacion_id) REFERENCES especializacion (especializacion_id)
    )`;

    //Create table mentores
    const sqlCreateTableMentores = `
            CREATE TABLE IF NOT EXISTS mentores(
            mentor_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_mentor VARCHAR(50) NOT NULL,
            apellido_mentor VARCHAR(50) NOT NULL,
            dni_mentor VARCHAR(8) NOT NULL UNIQUE,
            telefono_mentor VARCHAR(10) NOT NULL UNIQUE,
            edad_mentor INT NOT NULL,
            email_mentor VARCHAR(50) NOT NULL UNIQUE,
            tecnologia_mentor VARCHAR (50) NOT NULL,
            tecnologiasec1_mentor VARCHAR (50) NOT NULL,
            tecnologiasec2_mentor VARCHAR (50) NOT NULL,
            tecnologiasec3_mentor VARCHAR (50) NOT NULL,
            disponibilidad_mentor BOOLEAN DEFAULT false,
            empresa_id INT NOT NULL,
            especializacion_id INT NOT NULL,
            FOREIGN KEY (empresa_id) REFERENCES empresas (empresa_id),
            FOREIGN KEY (especializacion_id) REFERENCES especializacion (especializacion_id)
    )`;
    
    //Create table squads
    const sqlCreateTableSquads = `
            CREATE TABLE IF NOT EXISTS squads(
            squad_id INT AUTO_INCREMENT PRIMARY KEY,
            desarrollador1_id INT NOT NULL,
            desarrollador2_id INT NOT NULL,
            desarrollador3_id INT NOT NULL,
            desarrollador4_id INT NOT NULL,
            tester_id INT NOT NULL,
            uxui_id INT NOT NULL,
            mentor_id INT NOT NULL,
            FOREIGN KEY (desarrollador1_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (desarrollador2_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (desarrollador3_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (desarrollador4_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (tester_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (uxui_id) REFERENCES estudiantes (estudiante_id),
            FOREIGN KEY (mentor_id) REFERENCES mentores (mentor_id)
    )`;  

    //Run queries
    function runAllQueries() {
        connection.query(sqlCreateTableAdmin, (err, result) => {
            if (err) {
                console.error('Error creando la tabla admin_user: ' + err.message);
                return;
            }
            console.log('Tabla admin_user creada o ya existe');
            });

        connection.query(sqlCreateTableTipoOrg, (err, result) => {
            if (err) {
                console.error('Error creando la tabla tipoOrg: ' + err.message);
                return;
            }
            console.log('Tabla tipoOrg creada o ya existe');
            });

        connection.query(sqlCreateTableOngs, (err, result) => {
            if (err) {
                console.error('Error creando la tabla ongs: ' + err.message);
                return;
            }
        console.log('Tabla ongs creada o ya existe');
        });

        connection.query(sqlCreateTableCursos, (err, result) => {
            if (err) {
            console.error('Error creando la tabla cursos: ' + err.message);
            return;
        }
        console.log('Tabla cursos creada o ya existe');
        });

        connection.query(sqlCreateTablePerfiles, (err, result) =>{
            if(err) {
                console.error('Error creando la tabla perfiles: ' + err.message);
                return;
            }
        console.log('Tabla perfiles creada o ya existe');
        });

        connection.query(sqlCreateTableCondiciones, (err, result) =>{
            if(err) {
                console.error('Error creando la tabla condiciones: ' + err.message);
                return;
            }
            console.log('Tabla condiciones creada o ya existe');
        });

        connection.query(sqlCreateTableEstudiantes, (err, result) => {
            if (err) {
                console.error('Error creando la tabla estudiantes: ' + err.message);
                return;
            }
            console.log('Tabla estudiantes creada o ya existe');
        });

        connection.query(sqlCreateTableEmpresas, (err, result) => {
            if (err) {
                console.error('Error creando la tabla empresas: ' + err.message);
                return;
            }
            console.log('Tabla empresas creada o ya existe');
        });

        connection.query(sqlCreateTableEspecializacion, (err, result) => {
            if (err) {
                console.error('Error creando la tabla especializacion: ' + err.message);
                return;
            }
        console.log('Tabla especializacion creada o ya existe');
        });

        connection.query(sqlCreateTableTecnologias, (err, result) => {
            if (err) {
                console.error('Error creando la tabla tecnologias: ' + err.message);
                return;
            }
        console.log('Tabla tecnologias creada o ya existe');
        });

        connection.query(sqlCreateTableMentores, (err, result) => {
            if (err) {
                console.error('Error creando la tabla mentores: ' + err.message);
                return;
            }
        console.log('Tabla mentores creada o ya existe');
        });
    
        connection.query(sqlCreateTableSquads, (err, result) => {
            if (err) {
                console.error('Error creando la tabla squads: ' + err.message);
                return;
            }
        console.log('Tabla squads creada o ya existe');
        });  

const bcrypt = require('bcryptjs');

    const saltRounds = 10;
    const password = 'PasswordSquad8';
    const email = 'admin@admin.com';

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            console.error(err);
            return;
        }

        // Guardar el hash en la base de datos
        const sql = 'INSERT INTO admin_user (email_admin, password_admin) VALUES (?, ?)';
        connection.query(sql, [email, hash], function(err, results) {
            if (err) {
                console.error('Error al insertar el usuario: ' + err.message);
                return;
            }
            console.log('Usuario admin creado');
        });
    });
}

// Exportar la conexión para poder hacer consultas
module.exports = {
    query: (sql, params, callback) => {
        return connection.query(sql, params, callback);
    }
};