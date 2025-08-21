const {Router} = require("express");
const { getAllUsuarios,getAllUsuariosId,createUsuarios, updatedUsuarioId,deleteUsuarios,RegistrarDocente,ValidarToken} = require( "../controllers/Usuarioscontrollers.js"); 
const {RegistroDocenteSchema} = require("../schemas/DocenteSchema.js")
const {RegistrarDocenteAShema} = require("../schemas/RegistroShema.js")
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {GetPersonaUsuariosAll} = require('../controllers/UsuariosPersonasControllers.js')


const router = Router();

router.route('/C').get(GetPersonaUsuariosAll)
router.route("/").get(getAllUsuarios).post(ValidacionSchema(RegistroDocenteSchema), createUsuarios);
router.route("/registro").post(ValidacionSchema(RegistrarDocenteAShema), RegistrarDocente);
router.route("/:id").get(getAllUsuariosId).put(ValidacionSchema(RegistroDocenteSchema),updatedUsuarioId).delete(deleteUsuarios);
router.route("/validar-token/:token").get(ValidarToken);
module.exports =  router;