const express = require("express") ;
const morgan = require("morgan");
const Rpersona = require("./routes/PersonaRoutes.js")
const Rusuarios = require("./routes/UsuariosRoutes.js"); // Asegúrate de que el archivo existe y tiene la extensión .js
const Rpodcast = require('./routes/PodtcasRoutes.js');
const RCategoria = require('./routes/CategoriaRoutes.js');
const RRol = require('./routes/RolRoutes.js');


const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/Usuarios",Rusuarios);
app.use("/podcast",Rpodcast);
app.use("/Personas",Rpersona);
app.use("/Categorias",RCategoria);
app.use("/Rol",RRol);



// Se deben agregar las rutas de los estudiantes y los cursos


module.exports= app;

