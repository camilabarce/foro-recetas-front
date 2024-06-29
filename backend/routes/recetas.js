var express = require('express');
var router = express.Router();

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const connection = require("./../db-connection")

const fs = require('fs')


/* Consulta General de Productos */
router.get('/', function (req, res, next) {
    connection.query('select * from usuarios', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
        // res.render('index', { data: results });
    });
});


// /* Dashboard de Productos */
// router.get('/listado/', function (req, res, next) {

//     if (req.query.id) {
//         sentencia = 'select * from productos where id = ' + req.query.id
//     } else {
//         sentencia = 'select * from productos'
//     }

//     connection.query(sentencia, function (error, results, fields) {
//         if (error) throw error;
//         // res.json({data: results})
//         res.render('1_listadoDecor', { data: results });
//     });
// });


// router.get('/alta', function (req, res, next) {

//     res.render('2_formularioAlta')

// })

// router.post('/alta', upload.single('imagen'), async function (req, res, next) {

//     // Concatenando cadenas con signo +

//     let sentencia = 'insert into productos (nombre, descripcion, imagen) values("' + req.body.nombre + '","' + req.body.descripcion + '","/images/' + req.file.originalname + '")'

//     // Usando template string

//     // `insert into productos(nombre, descripcion,  imagen) values('${req.body.nombre}','${req.body.descripcion}','/images/${req.file.originalname}')`

//     let results = await connection.query(sentencia)

//     fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function (error) { })

//     res.render("finalizado", { mensaje: "Producto Ingresado Exitosamente" })

// })

// router.get('/modificar/:id', function (req, res, next) {

//     connection.query('select * from productos where id = ' + req.params.id, function (error, results, fields) {

//         if (error) throw error;
//         // res.json({data: results})
//         res.render('3_formularioModificar', { data: results });
//     });
// })


// router.post('/modificar/:id', upload.single('imagen'), async function (req, res, next) {

//     // Concatenando cadenas con signo +

//     let sentencia;

//     if (req.file) {
//         sentencia = `update productos set nombre  = '${req.body.nombre}', descripcion  = '${req.body.descripcion}', imagen = '/images/${req.file.originalname}' 
//      where id = ${req.params.id} `

//         fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function (error) { })

//     } else {
//         sentencia = `update productos set nombre  = '${req.body.nombre}', descripcion  = '${req.body.descripcion}' where id = ${req.params.id}`
//     }

//     connection.query(sentencia, function (error, results, fields) {

//         if (error) throw error;
//         // res.json({data: results})
//         res.render('finalizado', { mensaje: "El producto fue modificado exitosamente" });
//     });


// })

// router.get('/eliminar/:id', function (req, res, next) {

//     connection.query('select * from productos where id = ' + req.params.id, function (error, results, fields) {

//         if (error) throw error;
//         // res.json({data: results})
//         res.render('4_formularioEliminar', { data: results });
//     });
// })

// router.post('/eliminar/:id', function (req, res, next) {

//     connection.query('delete from productos where id = ' + req.params.id, function (error, results, fields) {

//         if (error) throw error;
//         // res.json({data: results})
//         res.render('finalizado', { mensaje: "El producto fue eliminado exitosamente" });
//     });
// })

module.exports = router;