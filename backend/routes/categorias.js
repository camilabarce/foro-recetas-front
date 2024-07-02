const express = require('express');
const router = express.Router();
const connection = require("./../db-connection")

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM categorias', function (error, results, fields) {
        if (error) {
            console.error('Error al obtener las categorias:', error);
            return res.status(500).json({ error: 'Error al obtener las categorias' });
        }
        res.json(results);
    });
});

module.exports = router;