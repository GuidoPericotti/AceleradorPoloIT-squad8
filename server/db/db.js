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

})

//Check bd exist
connection.query("SHOW DATABASES LIKE 'acelerador_db'", (err, results) => {
    if (err) {
        console.error('Error al comprobar la existencia de la base de datos. ', err);
        return;
    }

    if (results.length > 0) {
        console.log('La base de datos ya existe.');
    } else {
        //Create bd if not exist
        connection.query("CREATE DATABASE acelerador_db", (err, results) => {
            if (err) {
                console.error('Error al crear la base de datos. ', err);
                return;
            }
            console.log('Base de datos creada con éxito.');
        });
    }

    // Select bd for use
        connection.query('USE acelerador_db', (err) => {
            if (err) {
                console.error('Error al seleccionar Acelerador_DB. ',err);
                return;
            }
            console.log('Base de datos seleccionada correctamente.');


    //Create tables

    //Create table admin_user
    const sqlCreateTableAdmin = `
        CREATE TABLE IF NOT EXISTS admin_user (
        admin_id INT AUTO_INCREMENT PRIMARY KEY,
        nombre_admin VARCHAR(50) NOT NULL,
        apellido_admin VARCHAR(50) NOT NULL,
        email_admin VARCHAR(50) NOT NULL UNIQUE,
        password_admin VARCHAR(50) NOT NULL
        )`;
    
    //Run query
    connection.query(sqlCreateTableAdmin, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
        });

    //Create table tipoOrg
        const sqlCreateTableTipoOrg = `
        CREATE TABLE IF NOT EXISTS TipoOrg(
        tipoOrg_id INT AUTO_INCREMENT PRIMARY KEY,
        nombreTipo_org VARCHAR (50) UNIQUE
    )`
    
    //Run query
    connection.query(sqlCreateTableTipoOrg, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
        });

    //Create Table ongs
        const sqlCreateTableOngs = `
            CREATE TABLE IF NOT EXISTS ongs(
            organizacion_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_org VARCHAR (50) NOT NULL UNIQUE,
            password_org VARCHAR(50) NOT NULL,
            email_org VARCHAR(50) NOT NULL UNIQUE,
            pais_org VARCHAR (50) NOT NULL,
            provincia_org VARCHAR(50) NOT NULL,
            ciudad_org VARCHAR (50) NOT NULL,
            descripcion_org VARCHAR(150),
            fechaCreacion_org DATETIME DEFAULT CURRENT_TIMESTAMP(),
            tipoOrg_id INT NOT NULL,
            FOREIGN KEY ('tipoOrg_id') REFERENCES tipoOrg ('tipoOrg_id')
        )`;
    
    //Run query
    connection.query(sqlCreateTableOngs, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
        });
    });

    //Create table cursos
    const sqlCreateTableCursos = `
            CREATE TABLE IF NOT EXISTS cursos(
            curso_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_curso VARCHAR (50),
            fechaIncio_curso DATE NOT NULL,
            fechaCierre_curso DATE NOT NULL,
            descripcion_org VARCHAR(150),
            docente_curso VARCHAR(50) NOT NULL,
            organizacion_id INT NOT NULL,
            FOREIGN KEY ('organizacion_id') REFERENCES ongs ('organizacion_id')
        )`;
    
    //Run query
    connection.query(sqlCreateTableCursos, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });

    //Create table perfiles
    const sqlCreateTablePerfiles = `
            CREATE TABLE IF NOT EXISTS perfiles(
            perfil_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_perfil VARCHAR (50) NOT NULL UNIQUE
        )`;

    //Run query
    connection.query(sqlCreateTablePerfiles, (err, result) =>{
        if(err) {
            console.error('Error creando la tabla: ' + err.message);
            return
        }
        console.log('Tabla creada o ya existe');
            connection.end();//Close connection
    });

    //Create table condiciones
    const sqlCreateTableCondiciones = `
            CREATE TABLE IF NOT EXISTS condiciones(
            condicion_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_condicion VARCHAR (50) NOT NULL UNIQUE
        )`;

    //Run query
    connection.query(sqlCreateTableCondiciones, (err, result) =>{
        if(err) {
            console.error('Error creando la tabla: ' + err.message);
            return
        }
        console.log('Tabla creada o ya existe');
            connection.end();//Close connection
    });

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
            FOREIGN KEY ('curso_id') REFERENCES cursos ('curso_id'),
            FOREIGN KEY ('perfil_id') REFERENCES perfiles ('perfil_id'),
            FOREIGN KEY ('condicion_id') REFERENCES condiciones ('condicion_id')
        )`;
    
    //Run query
    connection.query(sqlCreateTableEstudiantes, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });

    //Create Table empresas
    const sqlCreateTableEmpresas = `
            CREATE TABLE IF NOT EXISTS empresas(
            empresa_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_empresa VARCHAR (50) NOT NULL UNIQUE,
            email_empresa VARCHAR(50) NOT NULL UNIQUE,
            password_empresa VARCHAR(50) NOT NULL,   
            pais_org VARCHAR (50) NOT NULL,
            provincia_org VARCHAR(50) NOT NULL,
            ciudad_org VARCHAR (50) NOT NULL,         
            descripcion_empresa VARCHAR(150),
            fechaCreacion_empresa DATETIME DEFAULT CURRENT_TIMESTAMP(),
            tipoOrg_id INT NOT NULL,
            FOREIGN KEY ('tipoOrg_id') REFERENCES tipoOrg ('tipoOrg_id')
        )`;

    //Run query
    connection.query(sqlCreateTableEmpresas, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });

    //Create table especializacion
    const sqlCreateTableEspecializacion = `
            CREATE TABLE IF NOT EXISTS especializacion(
            especializacion_id INT AUTO_INCREMENT PRIMARY KEY
        )`;
    
    //Run query
    connection.query(sqlCreateTableTecnologias, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });

    //Create table tecnologias
    const sqlCreateTableTecnologias = `
            CREATE TABLE IF NOT EXISTS tecnologias(
            tecnologia_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_tecnologia VARCHAR(50) NOT NULL UNIQUE,
            especializacion_id INT NOT NULL,
            FOREIGN KEY ('especializacion_id') REFERENCES especializacion ('especializacion_id')
        )`;
    
    //Run query
    connection.query(sqlCreateTableTecnologias, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });

    //Create table mentores
    const sqlCreateTableMentores = `
            CREATE TABLE mentores(
            mentor_id INT AUTO_INCREMENT PRIMARY KEY,
            nombre_mentor VARCHAR(50) NOT NULL,
            apellido_mentor VARCHAR(50) NOT NULL,
            dni_mentor VARCHAR(8) NOT NULL UNIQUE,
            telefono_mentor VARCHAR(10) NOT NULL UNIQUE,
            edad_mentor INT NOY NULL,
            email_mentor VARCHAR(50) NOT NULL UNIQUE,
            disponibilidad_mentor BOOLEAN DEFAULT false,
            empresa_id INT NOT NULL,
            especializacion_id INT NOT NULL,
            FOREIGN KEY ('empresa_id') REFERENCES empresas ('empresa_id'),
            FOREIGN KEY ('especializacion_id') REFERENCES especializacion ('especializacion_id')
        )`;
    
    //Run query
    connection.query(sqlCreateTableMentores, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });
    
    //Create table squads
    const sqlCreateTableSquads = `
            CREATE TABLE IF NOT EXISTS squads(
            squad_id INT AUTO_INCREMENT PRIMARY KEY
        )`;

    //Run query
    connection.query(sqlCreateTableSquads, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });    

    //Create table miembros_estudiantes
    const sqlCreateTableMiembrosEstudiantes = `
    CREATE TABLE IF NOT EXISTS miembros_estudiantes(
    miembroEstudiante_id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT NOT NULL,
    squad_id INT NOT NULL,
    FOREIGN KEY ('estudiante_id') REFERENCES estudiantes ('estudiante_id'),
    FOREIGN KEY ('squad_id') REFERENCES squads ('squad_id)
    )`;

    //Run query
    connection.query(sqlCreateTableMiembrosEstudiantes, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    }); 
    
    //Create table miembros_mentores
    const sqlCreateTableMiembrosMentores = `
            CREATE TABLE IF NOT EXISTS miembros_mentores(
            miembroMentor_id INT AUTO_INCREMENT PRIMARY KEY,
            mentor_id INT NOT NULL,
            squad_id INT NOT NULL,
            FOREIGN KEY ('mentor_id') REFERENCES mentores ('mentor_id'),
            FOREIGN KEY ('squad_id') REFERENCES squads ('squad_id)
        )`;

    //Run query
    connection.query(sqlCreateTableMiembrosMentores, (err, result) => {
        if (err) {
            console.error('Error creando la tabla: ' + err.message);
            return;
        }
        console.log('Tabla creada o ya existe');
        connection.end(); //Close conection
    });
});