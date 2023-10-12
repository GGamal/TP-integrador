
//busca la tarea por id
const buscarid = (id, lista) =>{
    
    let tbuscada = lista.find((elemento) => elemento.prioridad_id = id)
    // let tbuscada = lista.filter((elemento) => elemento.prioridad_id = id && !elemento.fecha_baja )

    return tbuscada;

}

const saludar = () =>{
    return("Hola mundo")
}

const listar = (lista) =>{
   return lista
}

module.exports = { buscarid, saludar}
