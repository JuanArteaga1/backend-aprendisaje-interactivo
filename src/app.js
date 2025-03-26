const express = require("express") ;
const morgan = require("morgan");
const UsuarioRoutes = require("./routes/UsuariosRoutes.js"); // Asegúrate de que el archivo existe y tiene la extensión .js
const PodcastRoutes = require('./routes/PodtcasRoutes.js');

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Se deben agregar las rutas de los estudiantes y los cursos
app.use("/api", UsuarioRoutes);
app.use("/api", PodcastRoutes);

module.exports= app;

