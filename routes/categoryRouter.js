const express = require("express");
const CategoryController= require("../controllers/categoryController.js");



const CategoryRouter = express.Router();

CategoryRouter.post("/",CategoryController.createNewCategory)


CategoryRouter.get("/:id",CategoryController.getCategoryById)
CategoryRouter.get("/name/:name",CategoryController.getCategoryIdByName)

CategoryRouter.get("/",CategoryController.getAllCategories)
module.exports =CategoryRouter;
