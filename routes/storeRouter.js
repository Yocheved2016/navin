const express = require("express");
const StoreController= require("../controllers/storeController.js");



 const StoreRouter = express.Router();

//StoreRouter.post("/",StoreController.createNewStore)
 StoreRouter.get("/",StoreController.getAllStores)
 StoreRouter.delete("/:id",StoreController.delete)
// StoreRouter.get("/:id",StoreController.getStoreById)


module.exports =StoreRouter;