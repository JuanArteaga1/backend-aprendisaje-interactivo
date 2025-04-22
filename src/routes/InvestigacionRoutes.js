const {Router} = require("express");
const { createInvestigacion, GetInvestigacionAll, GetInvestigacionId, PutInvestigacionId, DeleteInvestigacionId } = require("../controllers/InvestigacionControllers");
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {SubirInvestigacionSchema} = require("../schemas/InvestigacionesSchema.js")

const router = Router();

router.route("/").get(GetInvestigacionAll).post(createInvestigacion);
router.route("/:id").get(GetInvestigacionId).put(PutInvestigacionId).delete(DeleteInvestigacionId);

module.exports =  router;