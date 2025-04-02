const {Router} = require("express");
const {createCategoria,GetCategoriaAll,GetCategoriaId,PutCategoriaId,DeleteCategoriaId}=require("../controllers/CategoriasControllers")

const router = Router();

router.route("/").get(GetCategoriaAll).post(createCategoria);
router.route("/:id").get(GetCategoriaId).put(PutCategoriaId).delete(DeleteCategoriaId);

module.exports =  router;