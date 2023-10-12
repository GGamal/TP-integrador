const express = require("express");
const app = express();
const port = 3003;
const routerTareas = require("./routes/tareasRoutes");
const routerUsuarios = require("./routes/usuariosRoutes");
const mdw = require("./helpers/usuarioValidate")

app.use(express.json());

app.use("/api", routerUsuarios);

app.use(mdw.validateToken)
app.use("/api", routerTareas);


app.listen(port, "localhost", () =>{
    console.log("el servidor se levanto en el puerto", port)
})

module.exports = app