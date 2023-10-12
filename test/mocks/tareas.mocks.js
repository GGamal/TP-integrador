const tarea = {
  titulo: "gamald",
  prioridad_id: 1,
  completado: false
}
const tarea_mala = {
  nombre: "sadd",
  prioridad_id: 2,
  completado: true,
  das: 4
}
const tarea_buscarID = {
  id:1,
  titulo: "gamald",
  prioridad_id: 1,
  usuario_id: 1,
  completado: false,
  fecha_alta: null,
  fecha_modificacion: null,
  fecha_baja: null
}

const tareas = [
  {
    id: 1,
    titulo: "gamal",
    prioridad_id: 2,
    usuario_id: 1,
    completado: false,
    fecha_alta: null,
    fecha_modificacion: null,
    fecha_baja: null
  },
  {
    id: 2,
    titulo: "gammal 2",
    prioridad_id: 2,
    usuario_id: 18,
    completado: false,
    fecha_alta: null,
    fecha_modificacion: null,
    fecha_baja: null
  },
  {
    id: 3,
    titulo: "gammal 3",
    prioridad_id: 2,
    usuario_id: 19,
    completado: false,
    fecha_alta: null,
    fecha_modificacion: null,
    fecha_baja: null
  },
  {
    id: 4,
    titulo: "gammal 2",
    prioridad_id: 2,
    usuario_id: 18,
    completado: false,
    fecha_alta: null,
    fecha_modificacion: null,
    fecha_baja: null
  }

]

module.exports = { tarea, tareas, tarea_buscarID, tarea_mala };