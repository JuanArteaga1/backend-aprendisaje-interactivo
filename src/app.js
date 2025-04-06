const express = require("express") ;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const {DominioComunicacion} = require('./config.js')
const Rusuarios = require("./routes/UsuariosRoutes.js"); // Asegúrate de que el archivo existe y tiene la extensión .js
const Rpodcast = require('./routes/PodtcasRoutes.js');
const RCategoria = require('./routes/CategoriaRoutes.js');
const RInvestigacion = require('./routes/InvestigacionRoutes.js');
const RRol = require('./routes/RolRoutes.js');
const RProyectos = require('./routes/ProyectosRoute.js');
const Rlogin = require('./routes/LoginRoutes.js');
const cors = require('cors')



const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // sin slash al final
    credentials: true
  }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use("/Usuarios",Rusuarios);
app.use("/podcast",Rpodcast);
app.use("/Categorias",RCategoria);
app.use("/Investigacion",RInvestigacion);
app.use("/Proyectos",RProyectos);
app.use("/login", Rlogin);





// Se deben agregar las rutas de los estudiantes y los cursos


module.exports= app;

