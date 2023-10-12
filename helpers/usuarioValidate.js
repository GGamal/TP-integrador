const joi = require("joi")
const secret = require("../const").secret
const knex = require("../knexfile");
const jwt = require("jsonwebtoken");


const formRegister = joi.object({
    nombre: joi.string().required(),
    contraseña: joi.string().required(),
});

const formLogin = joi.object({
    nombre: joi.string().required(),
    contraseña: joi.string().required()
})

const validateRegistrar = (req,res,next) =>{
    const {error, validate} = formRegister.validate(req.body);

    if(error){
        return res.status(400).json("campos invalidos")
    }
    next();

}

const validateIngresar = (req, res, next) =>{
    const {error, validate} = formLogin.validate(req.body)

    if(error){
        return res.status(400).json("campos invalidos")
    }
    next();
}


const validateToken = async (req,res, next) =>{
    
    const token = req.headers["authorization"]?.split(" ")[1]
    const usuarioLogueado = jwt.decode(token, secret)
    console.log(token)
    if(!token){
       return res.status(400).json({error : "Se requiere token"})
    }

   

    // const permisos = await knex("usuarios")
    // .select("usuarios.nombre")
    // .where("usuarios.id_perfil","=", usuarioLogueado.id_usuario)
    // .then((resultado) =>{
    //     return resultado
    // })
    // .catch(e => { res.status(400).send(e)})

    // if(!permisos){
    //     return res.status(400).send("no tiene la sesion iniciada")
    // }
    req.usuario = usuarioLogueado
    next();
    
}



module.exports = { validateRegistrar, validateIngresar, validateToken }