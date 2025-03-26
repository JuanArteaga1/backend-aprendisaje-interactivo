const {Router} = require("express");
const { getAllUsuarios,getAllUsuariosId,createUsuarios, updatedUsuarioId,deleteUsuarios} = require( "../controllers/Usuarioscontrollers"); 

const router = Router();


router.route("/").get(getAllUsuarios).post(createUsuarios);
router.route("/:id").get(getAllUsuariosId).patch(updatedUsuarioId).delete(deleteUsuarios);

module.exports =  router;