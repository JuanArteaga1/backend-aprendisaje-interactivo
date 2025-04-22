const {Router} = require("express");
const {createSimulaciones, GetSimulacionesAll, getSimulacionesId, PutSimulacionesId, DeleteSimulacionesId} = require('../controllers/SimulacionesControllers');
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirSimulacionesSchema} = require("../schemas/SimulacionesSchema.js")

const router = Router();

router.route("/").get(GetSimulacionesAll).post(createSimulaciones);
router.route("/:id").get(getSimulacionesId).put(PutSimulacionesId).delete(DeleteSimulacionesId);

module.exports =  router;