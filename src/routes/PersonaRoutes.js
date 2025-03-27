const {Router} = require("express");
const {createPersona}=require("../controllers/PersonaControllers")

const router = Router();

router.route("/Register").post(createPersona)

module.exports =  router;