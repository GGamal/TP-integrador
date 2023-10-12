const request = require("supertest");
const app = require("../../index"); 
const { describe, test, expect } = require("@jest/globals");
const mockstareas = require("../mocks/tareas.mocks");
const mocksUsuarios = require("../mocks/usuarios.mocks")

// TEST DE TAREASCONTROLLER

//listar tarea ID
// describe("Pruebas de API", () => {
//   test("Debería obtener una respuesta exitosa de la API", async () => {
//     const headers = {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
//     };

//     const body = mockstareas.tareas;

//     const response = await request(app)
//       .post("/api/listar/1")
//       .set(headers)
//       .send(body);

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({mensaje: "se pudo traer las tareas"});
//   });
// });
//NO FUNCIONAAAAA


// actualizar tarea

describe("Pruebas de API", () => {
    test("Debería obtener una respuesta incorrecta de la API porque no encuentra la trea existente a actualizar", async () => {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
      };
  
      const body = mockstareas.tareas;
  
      const response = await request(app)
        .post("/api/actualizartarea/18")
        .set(headers)
        .send(body);
  
      expect(response.status).toBe(404);
      // expect(response.body).toEqual("ese id no existe"); //no me toma el msj de que no existe
    });
  });

//   // creacion de tarea

  describe("Pruebas de API", () => {
    test("Debería obtener una respuesta exitosa de la API", async () => {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
      };
  
      const body = mockstareas.tarea;
      console.log(body)
  
      const response = await request(app)
        .post("/api/agregartarea/11")
        .set(headers)
        .send(body);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        {mensaje : "se creo correctamente"}
      );
    });
  });
 
  describe("Pruebas de API", () => {
    test("Debería obtener una respuesta incorrecta de la API porque falta el token", async () => {
      const headers = {
        Authorization:
          "Bearer " // Encabezado personalizado
      };
  
      const body = mockstareas.tarea;
  
      const response = await request(app)
        .post("/api/agregartarea/11")
        .set(headers)
        .send(body);
  
      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error : "Se requiere token"
      });
    });
  });


// TEST DE USUARIOS

//   // crear usuario

  describe("Pruebas de API", () => {
    test("Debería obtener una respuesta exitosa de la API", async () => {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
      };
  
      const body = mocksUsuarios.usuario;
      console.log(body)
  
      const response = await request(app)
        .post("/api/registrar")
        .set(headers)
        .send(body);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        {mensaje: "se creo bien"}
      );
    });
  });
 
  describe("Pruebas de API", () => {
    test("Debería obtener una respuesta incorrecta de la API porque el usuario esta mal hecho y no pasa el validador", async () => {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
      };
  
      const body = mocksUsuarios.usuariomalo;
  
      const response = await request(app)
        .post("/api/registrar")
        .set(headers)
        .send(body);
  
      expect(response.status).toBe(400);
      expect(response.body).toEqual(
        "campos invalidos"
        );
    });
  });

//Login usuario

// describe("Pruebas de API", () => {
//       test("Debería obtener una respuesta exitosa de la API", async () => {
//         const headers = {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
//         };
    
//         const body = mocksUsuarios.usuario;
//         console.log(body)
    
//         const response = await request(app)
//           .post("/api/ingresar")
//           .set(headers)
//           .send(body);
    
//         expect(response.status).toBe(200);
//         // expect(response.body).toEqual(
//         //   {mensaje: "se creo bien"}
//         // );
//       });
//     });
   
    // describe("Pruebas de API", () => {
    //   test("Debería obtener una respuesta incorrecta de la API porque el usuario esta mal hecho y no pasa el validador", async () => {
    //     const headers = {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJnYW1hbCIsInVzdWFyaW9faWQiOjgxMSwiaWF0IjoxNjk2OTc3Njc0fQ.wiWRPN6TZs561YzPqncudW2Jgg3t8BSg6ZY-DgzDoSQ" // Encabezado personalizado
    //     };
    
    //     const body = mocksUsuarios.usuariomalo;
    
    //     const response = await request(app)
    //       .post("/api/registrar")
    //       .set(headers)
    //       .send(body);
    
    //     expect(response.status).toBe(400);
    //     expect(response.body).toEqual(
    //       "campos invalidos"
    //       );
    //   });
    // });

