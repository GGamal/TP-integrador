const express = require("express");
const routes = express.Router();
const usuariosController = require("../controller/usuariosController");
const mdw = require("../helpers/usuarioValidate"); 

routes.post("/registrar", mdw.validateRegistrar, usuariosController.registrar);

routes.get("/ingresar", mdw.validateIngresar, usuariosController.ingresar);

routes.put("/actualizarusuario/:id",mdw.validateIngresar ,usuariosController.actualizarUsuario);

routes.put("/eliminarusuario/:id", usuariosController.eliminarUsuario);

routes.get("/listarusuarios", usuariosController.listarUsuarios)



module.exports = routes;