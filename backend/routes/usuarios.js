var express = require('express');
var router = express.Router();
const connection = require("../db-connection")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM usuarios', function (error, results, fields) {
        if (error) {
            console.error('Error al obtener los usuarios:', error);
            return res.status(500).json({ error: 'Error al obtener las recetas' });
        }
        res.json(results);
    });
});

router.get('/:id', function (req, res, next) {
    const idreceta = req.params.id;

    connection.query('SELECT * FROM usuarios WHERE idusuario = ?', [idusuario], function (error, results, fields) {
        if (error) {
            console.error('Error al obtener el usuario:', error);
            return res.status(500).json({ error: 'Error al obtener el usuario' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrada' });
        }

        res.json(results[0]);
    });
});

module.exports = router;
