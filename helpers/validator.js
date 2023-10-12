const joi = require("joi")

const formTarea = joi.object({
    titulo: joi.string().min(1).max(20).required(),
    prioridad_id: joi.number().required(),
    completado: joi.boolean().required()
})

const validadorTarea = (req, res, next) =>{
    const {error, validate} = formTarea.validate(req.body);

    if(error){
        return res.status(400).json("campos invalidos");
    }
    next();

}

module.exports = { validadorTarea }