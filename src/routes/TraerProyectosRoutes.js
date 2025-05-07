const {GetProyectosAll,GetProyectosId} = require("../controllers/TraerProyectosControllers")
const {Router} = require("express");

const router = Router();
router.route("/").get(GetProyectosAll)
router.route("/:id").get(GetProyectosId)

module.exports =  router;