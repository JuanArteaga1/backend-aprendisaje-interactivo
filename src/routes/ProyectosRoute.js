const {Router} = require("express");
const {createProyectos,GetProyectosAll,GetProyectosId,PutProyectosId,DeleteProyectosId}=require("../controllers/ProyectosControllers")
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirProyectosSchema} = require("../schemas/ProyectosSchema.js")
const { GuardarImagen, upload } = require("../middlewares/MulterConfig.js");


const router = Router();

router.route("/").get(GetProyectosAll).post(upload.fields([{name : "urlArchivoapk",maxCount: 1},{ name: "portada",maxCount: 1},{name:"urlDoc",maxCount: 1 }]),ValidacionSchema(SubirProyectosSchema), createProyectos);
router.route("/:id").get(GetProyectosId).put(PutProyectosId).delete(DeleteProyectosId);

module.exports =  router;