var express = require('express');
var router = express.Router();

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const connection = require("./../db-connection")

const fs = require('fs')

router.get('/', function (req, res, next) {
    connection.query('select * from usuarios', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
        // res.render('index', { data: results });
    });
});

router.get('/:id', function (req, res, next) {
    connection.query('select * from usuarios where idusuarios = ' + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

module.exports = router;