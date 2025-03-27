const {Router} = require("express");
const { getAllPodtcas,getAllPodtcasId,createPodtcas, updatedPodtcasId,deletePodtcas} = require( "../controllers/PodtcasControllers.js"); 

const router = Router();


router.route("/podcast").get(getAllPodtcas).post(createPodtcas);
router.route("/:id").get(getAllPodtcasId).put(updatedPodtcasId).delete(deletePodtcas);

module.exports =  router;