const express = require("express") ;
const morgan = require("morgan");
const UsuarioRoutes = require("./routes/UsuariosRoutes.js");
const Rpersona = require("./routes/PersonaRoutes.js")

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Se deben agregar las rutas de los estudiantes y los cursos
app.use("/api", UsuarioRoutes,Rpersona);

module.exports= app;

