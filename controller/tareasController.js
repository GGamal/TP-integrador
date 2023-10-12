const tareas = require("../tareas");
const knex = require("../knexfile");

// funciones con tareas.js
const saludar = (req, res) =>{
    return res.status(200).send("Hola mundo")
}

const agregar = (req, res) =>{
    let {titulo, prioridad_id, usuario_id, completado} = req.body;

    const tarea = {
        titulo,
        prioridad_id,
        usuario_id,
        completado,
        fecha_alta: new Date().getFullYear(),
        fecha_modificacion: null,
        fecha_baja: null
    }

    tareas.push(tarea)
    return res.status(200).json({tarea: tarea, status: "success", tareas: tareas})

}

const actualizar = (req,res) =>{
    let id = req.params.id;
    console.log("este es el id", id)
    let tbuscada = tareas.find((elemento) => elemento.prioridad_id = id)

    console.log("esta es la terea buscada", tbuscada)
    if(!tbuscada){
        return res.status(404).send("no existe ese id de tarea")
    }

    let {titulo, prioridad_id, usuario_id, completado} = req.body;

    tbuscada.titulo = titulo;
    tbuscada.prioridad_id = prioridad_id;
    tbuscada.usuario_id = usuario_id;
    tbuscada.completado = completado;
    tbuscada.fecha_modificacion = new Date().getFullYear();
    
    return res.status(200).json({tarea: tbuscada, tareas: tareas})

}

// funciones con base da datos

const agregarTarea = async (req, res) =>{
    let {titulo, prioridad_id, completado} = req.body;
    let id = req.params.usuario_id
    const tarea = {
        id: new Date().getMilliseconds(),
        titulo: titulo,
        prioridad_id: prioridad_id,
        usuario_id: id,
        completado: completado,
        fecha_alta: new Date()
    }
    // console.log(tarea)

    await knex("tareas")
    .returning(["id","titulo", "prioridad_id", "usuario_id", "completado", "fecha_alta"])
    .insert(tarea)
    .then(() => {res.status(200).json({mensaje: "se creo correctamente"})})
    .catch(() => {res.status(400).json({mensaje: "error"})})

}

const listar = async(req, res) =>{
     await knex.select("*").from("tareas")
    .where("tareas.fecha_baja", null)
    .then((resultado) => { return res.status(200).json({mensaje: "se pudo traer las tareas", tareas:resultado})})
    .catch((e) => {res.status(400).send(e)})
}

const listarID = async (req, res) =>{
    let id = req.params.id
    const usuario = await knex.select("*").from("tareas").where("tareas.usuario_id", "=", id)
    .then((resultado) => { 
        if(resultado.fecha_baja !== null){
        return res.status(200).json({mensaje : "este usuario no tiene tareas"})
        }
        return res.status(200).json({mensaje: "las tareas del usuario son", tareas: resultado})
    })
    .catch((e) => { res.status(400).send(e)})

    if(!usuario){
        return res.status(404).send("ese id de usuario no existe")
    }
}

const actualizarTarea = async(req, res) =>{
    let id = req.params.id;
    let {titulo, prioridad_id, completado} = req.body;
    
    const tarea = await knex.select("*").from("tareas").where("tareas.id", "=", id).update({
        titulo,
        prioridad_id,
        completado,
        fecha_modificacion: new Date()
    })
    .then(() =>{res.status(200).json({mensaje: "se actualizo bien"})})
    .catch(() =>{res.status(400).json({mensaje: "error"})})
    if(!tarea){
        return res.status(404).json("ese id no existe")
    }
    
}

const eliminarTarea = async (req, res) =>{
    let id = req.params.id;

    const tarea = await knex.select("*").from("tareas").where("tareas.id", "=", id).update({
        fecha_baja: new Date()
    })
    .then((resultado) => {return res.status(200).json({mensaje: "se elimino correctamente", tareas: resultado})})
    if(!tarea){
        return res.status(404).send("ese id de tarea no existe")
    }
    
}

module.exports = { saludar, agregar, actualizar, agregarTarea, listar, listarID, actualizarTarea, eliminarTarea }