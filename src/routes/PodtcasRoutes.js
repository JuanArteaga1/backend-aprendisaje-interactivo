const {Router} = require("express");
const { getAllPodtcas,getAllPodtcasId,createPodtcas, updatedPodtcasId,deletePodtcas} = require( "../controllers/PodtcasControllers.js"); 
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirPodtcasSchema} = require("../schemas/ProyectosSchema.js")

const router = Router();


router.route("/").get(getAllPodtcas).post(ValidacionSchema(SubirPodtcasSchema), createPodtcas);;
router.route("/:id").get(getAllPodtcasId).put(updatedPodtcasId).delete(deletePodtcas);

module.exports =  router;