const {Router} = require("express");
const {login,loginout,Profile} = require( "../controllers/logincontrollers"); 
const {AutenticacionRequerida} = require('../middlewares/ValidacionToken')

const router = Router();
router.route("/").post(login)
router.route("/out").post(loginout)
router.route("/out").post(loginout)
router.route("/Profile").get(AutenticacionRequerida,Profile)

module.exports =  router;