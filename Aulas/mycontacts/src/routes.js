const { Router } = require("express");
const ContactController = require("./app/controllers/ContactController");
const CategoryController = require("./app/controllers/CategoryController");

const router = Router();

// ROTAS DE CONTATOS
router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

//ROTAS DE CATEGORIAS
router.post("/categories", CategoryController.store);
router.get("/categories", CategoryController.index);

module.exports = router;
