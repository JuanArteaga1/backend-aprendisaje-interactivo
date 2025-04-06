const {Router} = require("express");
const {createProyectos,GetProyectosAll,GetProyectosId,PutProyectosId,DeleteProyectosId}=require("../controllers/ProyectosControllers")

const router = Router();

router.route("/").get(GetProyectosAll).post(createProyectos);
router.route("/:id").get(GetProyectosId).put(PutProyectosId).delete(DeleteProyectosId);

module.exports =  router;