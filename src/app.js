import express from "express";
import morgan from "morgan";
import UsuarioRoutes from "./routes/UsuariosRoutes.js"; // Asegúrate de que el archivo existe y tiene la extensión .js

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Se deben agregar las rutas de los estudiantes y los cursos
app.use("/api/students", UsuarioRoutes);

export default app;

