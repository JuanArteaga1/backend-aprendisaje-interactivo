const {Router} = require("express");
const {createProyectos,GetProyectosAll,GetProyectosId,PutProyectosId,DeleteProyectosId}=require("../controllers/ProyectosControllers")
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirProyectosSchema} = require("../schemas/ProyectosSchema.js")

const router = Router();

router.route("/").get(GetProyectosAll).post(ValidacionSchema(SubirProyectosSchema), createProyectos);;
router.route("/:id").get(GetProyectosId).put(PutProyectosId).delete(DeleteProyectosId);

module.exports =  router;