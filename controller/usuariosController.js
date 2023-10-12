const knex = require("../knexfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../const").secret

const registrar = async (req, res) =>{
    let {nombre, contraseña} = req.body;

    const salt = await bcrypt.genSalt(10);
    contraseña = await bcrypt.hash(contraseña, salt)

    const usuario = {
        usuario_id: new Date().getMilliseconds(),
        nombre: nombre,
        contraseña: contraseña,
        fecha_alta: new Date()
    }
    console.log(usuario);

    await knex("usuarios")
    .returning(["usuario_id","nombre", "contraseña", "fecha_alta"])
    .insert(usuario)
    .then(() => {res.status(200).json({mensaje: "se creo bien"})})
    .catch(() => {res.status(400).json({mensaje: "error"})})

}

const ingresar = async (req, res) =>{

    let {nombre, contraseña} = req.body;

    const usuario = await knex.select("*").from("usuarios").where("usuarios.nombre", "=", nombre)
    .then((result) =>{
        return result[0]
    })
    .catch((e) =>{ res.status(404).send(e)})
    if(!usuario){
        return res.status(400).send("el usuario no existe")
    }

    const validateContraseña = await bcrypt.compare(contraseña, usuario.contraseña)

    if(!validateContraseña){
        return res.status(404).send("contraseña incorrecta")
    }
    
    const token = jwt.sign(
        {
            nombre: usuario.nombre,
            usuario_id: usuario.usuario_id,
        },
        secret
    )
    return res.status(200).json({mensaje : "se logueo bien", token})
    // return res.status(200).json({mensaje : "se logueo bien", token})
    
}

const actualizarUsuario = async (req, res) =>{
    let id = req.params.id
    let {nombre, contraseña} = req.body

    const salt = await bcrypt.genSalt(10);
    contraseña = await bcrypt.hash(contraseña, salt)

    const usuario = {
        nombre: nombre,
        contraseña: contraseña,
        fecha_modificacion: new Date()
    }
    await knex("usuarios")
    .where("usuarios.usuario_id", "=", id)
    .update(usuario)
    .then(() => {res.status(200).json({mensaje: "se actualizo bien"})})
    .catch((e) => {res.status(400).json({mensaje: e})})
}

const eliminarUsuario = async(req, res) => {
    let id = req.params.id
    const usuario = {
        fecha_baja: new Date()
    }

    await knex("usuarios").where("usuarios.usuario_id", "=", id)
    .update(usuario)
    .then(() =>{ res.status(200).json({mensaje: "se elimino correctamente"})})
    .catch((e) =>{ res.status(404).send(e)})

}

const listarUsuarios = async(req, res) =>{
    await knex.select("*").from("usuarios")
    .where("usuarios.fecha_baja", null)
    .then(resultado => {res.status(200).json({mensaje: "ok", usuarios: resultado})})
    .catch(error => {res.status(400).json({error : error})})
}

module.exports = {registrar, ingresar, actualizarUsuario, eliminarUsuario, listarUsuarios}

