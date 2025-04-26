const {Router} = require("express");
const { getAllPodtcas,getAllPodtcasId,createPodtcas, updatedPodtcasId,deletePodtcas} = require( "../controllers/PodtcasControllers.js"); 
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirPodcastSchema} = require("../schemas/PodtcasSchema.js")
const { GuardarImagen, upload } = require("../middlewares/MulterConfig.js");



const router = Router();


router.route("/").get(getAllPodtcas).post(upload.single("portada"),ValidacionSchema(SubirPodcastSchema),createPodtcas);;
router.route("/:id").get(getAllPodtcasId).put(updatedPodtcasId).delete(deletePodtcas);

module.exports =  router;