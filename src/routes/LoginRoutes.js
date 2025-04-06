const {Router} = require("express");
const {login,loginout,Profile} = require( "../controllers/logincontrollers"); 
const {AutenticacionRequerida} = require('../middlewares/ValidacionToken')
const {ValidacionSchema} = require('../middlewares/validacionMiddlewares')
const {LoginSchema} = require('../schemas/LoginSchema')



const router = Router();
router.route("/").post(ValidacionSchema(LoginSchema),login)
router.route("/out").post(loginout)
router.route("/out").post(loginout)
router.route("/Profile").get(AutenticacionRequerida,Profile)

module.exports =  router;