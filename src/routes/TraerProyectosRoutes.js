const {GetProyectosAll} = require("../controllers/TraerProyectosControllers")
const {Router} = require("express");

const router = Router();
router.route("/").get(GetProyectosAll)
module.exports =  router;