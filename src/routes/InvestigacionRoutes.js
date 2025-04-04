const {Router} = require("express");
const { createInvestigacion, GetInvestigacionAll, GetInvestigacionId, PutInvestigacionId, DeleteInvestigacionId } = require("../controllers/InvestigacionControllers");


const router = Router();

router.route("/").get(GetInvestigacionAll).post(createInvestigacion);
router.route("/:id").get(GetInvestigacionId).put(PutInvestigacionId).delete(DeleteInvestigacionId);

module.exports =  router;