const { describe, test, expect } = require("@jest/globals");
const utils = require("../../utils/unitarios.utils");
const lista = require("../../tareas")

describe("encuentra la id prioridad de la tarea", () => {
  test("Debería obtener el id que pase por parametro", () => {

    const resultado = utils.buscarid(1, lista);
    expect(resultado).toEqual(
      {
        titulo: "Tarea 1",
        prioridad_id: 1,
        usuario_id: 1,
        completado: true,
        fecha_alta: "01-02-2023",
        fecha_modificacion: null,
        fecha_baja: null
      }
    );
  });
});

describe("Promedio de precios ERROR", () => {
  test("Debería obtener el promedio de precios", () => {
    const resultado = utils.saludar();
    console.log(resultado)
    expect(resultado).toEqual("Hola mundo");
  });
});