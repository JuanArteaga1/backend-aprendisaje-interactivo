const {Router} = require("express");
const { getAllUsuarios,getAllUsuariosId,createUsuarios, updatedUsuarioId,deleteUsuarios} = require( "../controllers/Usuarioscontrollers.js"); 
const {RegistroDocenteSchema} = require("../schemas/DocenteSchema.js")
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')


const router = Router();


router.route("/").get(getAllUsuarios).post(ValidacionSchema(RegistroDocenteSchema), createUsuarios);
router.route("/:id").get(getAllUsuariosId).patch(updatedUsuarioId).delete(deleteUsuarios);

module.exports =  router;