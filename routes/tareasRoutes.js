const express = require("express");
const router = express.Router();
const tareasController = require("../controller/tareasController");
const validador = require("../helpers/validator");

//rutas con el archivo tareas.js
router.get("/", tareasController.saludar);

router.post("/agregar", tareasController.agregar);

router.put("/actualizar/:id", tareasController.actualizar);

//rutas con base da datos
router.post("/agregartarea/:usuario_id",validador.validadorTarea, tareasController.agregarTarea);

router.get("/listar", tareasController.listar);

router.get("/listar/:id", tareasController.listarID);

router.put("/actualizartarea/:id",validador.validadorTarea, tareasController.actualizarTarea);

router.put("/eliminartarea/:id", tareasController.eliminarTarea);

module.exports = router;