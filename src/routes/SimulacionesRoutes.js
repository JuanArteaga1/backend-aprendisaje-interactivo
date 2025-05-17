const {Router} = require("express");
const {createSimulaciones, GetSimulacionesAll, getSimulacionesId, PutSimulacionesId, DeleteSimulacionesId} = require('../controllers/SimulacionesControllers');
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirSimulacionesSchema} = require("../schemas/SimulacionesSchema.js")

const {GuardarImagen, upload } = require("../middlewares/MulterConfig.js");

const router = Router();

router.route("/").get(GetSimulacionesAll).post(upload.fields([{name:"urlArchivoapk",maxCount:1},{name:"urlDoc",maxCount:1},{name:"portada",maxCount:1}]), ValidacionSchema(SubirSimulacionesSchema),createSimulaciones);
router.route("/:id").get(getSimulacionesId).put(upload.fields([{name:"urlArchivoapk",maxCount:1},{name:"urlDoc",maxCount:1},{name:"portada",maxCount:1}]), ValidacionSchema(SubirSimulacionesSchema),PutSimulacionesId).delete(DeleteSimulacionesId);

module.exports =  router;