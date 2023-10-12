const listaDeTareas = [
    {
      titulo: "Tarea 1",
      prioridad_id: 1,
      usuario_id: 1,
      completado: true,
      fecha_alta: "01-02-2023",
      fecha_modificacion: null,
      fecha_baja:null
    },
    {
      titulo: "Tarea 2",
      prioridad_id: 2,
      usuario_id: 1,
      completado: false,
      fecha_alta: "01-02-2023",
      fecha_modificacion: null,
      fecha_baja:null
    },
    {
      titulo: "Tarea que no es baja",
      prioridad_id: 1,
      usuario_id: 1,
      completado: false,
      fecha_alta: "01-02-2023",
      fecha_modificacion: null,
      fecha_baja:null
    }

  ];

  module.exports = listaDeTareas;