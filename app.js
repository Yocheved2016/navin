const express = require("express");
require('dotenv').config()


const CategoryRouter=require("./routes/categoryRouter.js")
const StoreRouter=require("./routes/storeRouter.js")




const app = express();
app.use(express.urlencoded())
app.use(express.json());



 app.use("/api/category",CategoryRouter)

 app.use("/api/store",StoreRouter)
app.listen("3001", () => {
     console.log("app running");
 });