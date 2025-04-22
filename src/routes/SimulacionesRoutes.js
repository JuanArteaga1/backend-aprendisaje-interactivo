const {Router} = require("express");
const {createSimulaciones, GetSimulacionesAll, getSimulacionesId, PutSimulacionesId, DeleteSimulacionesId} = require('../controllers/SimulacionesControllers');

const router = Router();

router.route("/").get(GetSimulacionesAll).post(createSimulaciones);
router.route("/:id").get(getSimulacionesId).put(PutSimulacionesId).delete(DeleteSimulacionesId);

module.exports =  router;