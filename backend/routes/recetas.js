const express = require('express');
const router = express.Router();
const connection = require("./../db-connection")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });
const fs = require('fs')

router.post('/nuevaReceta', upload.single('imagen'), async function (req, res, next) {
    const { titulo, subtitulo, pasos, ingredientes, idcategoria } = req.body;
    const imagen = req.file;

    console.log('Datos recibidos:', req.body);
    console.log('Archivo recibido:', req.file);

    if (!titulo || !subtitulo || !imagen || !pasos || !ingredientes || !idcategoria) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const imagenPath = `/images/recetas/${imagen.originalname}`;

    try {
        // Insertar la receta en la base de datos
        const query = `
            INSERT INTO recetas (titulo, subtitulo, imagen, pasos, ingredientes, idcategoria) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [titulo, subtitulo, imagenPath, pasos, ingredientes, idcategoria];
        const results = await connection.query(query, values);

        // Mover la imagen del directorio temporal a la carpeta de imágenes pública
        fs.createReadStream(`./uploads/${imagen.filename}`)
            .pipe(fs.createWriteStream(`./public/images/recetas/${imagen.originalname}`))
            .on('finish', () => {
                res.json({ message: 'Receta agregada exitosamente', id: results.insertId });
            })
            .on('error', (error) => {
                console.error('Error al mover la imagen:', error);
                return res.status(500).json({ error: 'Error al mover la imagen' });
            });

    } catch (error) {
        console.error('Error al insertar la receta:', error);
        return res.status(500).json({ error: 'Error al insertar la receta' });
    }
});

router.get('/', function (req, res, next) {
    const query = `
        SELECT 
            recetas.idreceta,
            recetas.titulo,
            recetas.subtitulo,
            recetas.imagen,
            recetas.pasos,
            recetas.ingredientes,
            recetas.idusuario,
            categorias.nombre AS nombre_categoria
        FROM 
            recetas
        JOIN 
            usuarios ON recetas.idusuario = usuarios.idusuario
        JOIN 
            categorias ON recetas.idcategoria = categorias.idcategoria;
    `;
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.error('Error al obtener las recetas:', error);
            return res.status(500).json({ error: 'Error al obtener las recetas' });
        }
        res.json(results);
    });
});

router.get('/:id', function (req, res, next) {
    const idreceta = req.params.id;

    connection.query('SELECT * FROM recetas WHERE idreceta = ?', [idreceta], function (error, results, fields) {
        if (error) {
            console.error('Error al obtener la receta:', error);
            return res.status(500).json({ error: 'Error al obtener la receta' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }

        res.json(results[0]);
    });
});

router.put('/:id', function (req, res, next) {
    const { idreceta, titulo, subtitulo, imagen, pasos, ingredientes, idusuario } = req.body;

    if (!idreceta || !titulo || !subtitulo || !imagen || !pasos || !ingredientes || !idusuario) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    let query = 'UPDATE recetas SET titulo = ?, subtitulo = ?, imagen = ?, pasos = ?, ingredientes = ?, idusuario = ? WHERE idreceta = ?';
    let values = [titulo, subtitulo, imagen, pasos, ingredientes, idusuario, idreceta];

    connection.query(query, values, function (error, results, fields) {
        if (error) {
            console.error('Error al actualizar la receta:', error);
            return res.status(500).json({ error: 'Error al actualizar la receta' });
        }
        res.json({ message: 'Receta actualizada exitosamente', affectedRows: results.affectedRows });
    });
});

router.delete('/:id', function (req, res, next) {
    connection.query('DELETE FROM recetas WHERE idreceta = ' + req.params.id, function (error, results, fields) {
        if (error) {
            console.error('Error al eliminar la receta:', error);
            return res.status(500).json({ error: 'Error al eliminar la receta' });
        }
        res.json({ message: 'Receta eliminada exitosamente', affectedRows: results.affectedRows });
    });
});

module.exports = router;