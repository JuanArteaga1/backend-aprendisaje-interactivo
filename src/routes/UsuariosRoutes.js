import express from "express";

/*
definimos las rutas de cada uno de los metodos del controlador de estudiantes
teniendo en cuenta si son metodos get, post, patch o delete
y si tienen parametros o no
*/
import { 
    getAllUsuarios,
    getAllUsuariosId,
    createUsuarios, 
    updatedUsuarioId, 
    deleteUsuarios
} from "../controllers/Usuarioscontrollers.js"; // 🔹 QUITA LOS PARÉNTESIS Y AGREGA `.js`


const router = express.Router();

/*
tambien podemos definir rutas para cada metodo
por ejemplo para el metodo getAllStudents, getStudentById y createStudent
router.route("/getAll").get(getAllStudents);
router.route("/getById/:id").get(getStudentById);
router.route("/create").post(createStudent);
*/

router.route("/").get(getAllUsuarios).post(createUsuarios);
router.route("/:id").get(getAllUsuariosId).patch(updatedUsuarioId).delete(deleteUsuarios);

export default router;