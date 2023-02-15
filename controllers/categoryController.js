const { read } = require("fs");
const CategoryDB=require("../dal/categoryAccess.js")

class CategoryController {
    getAllCategories = async(req, res) => {
       
        var categories = await CategoryDB.getAllCategories();
        res.send(categories);
    }
    createNewCategory = async(req,res)=>
    {
        const categoryToInsert = req.body;

        if (!categoryToInsert)  return res.status(400).json({ message: 'All fields are required'}) 

       const newCategory=CategoryDB.createNewCategory(categoryToInsert)

        if (newCategory) res.status(201).json({ message: 'created category' })

       

        else res.status(400).json({ message: 'error' })
        
   
    }

    getCategoryById= async (req,res)=>{
       // console.log(req.params.id);
        var Curcategory= await CategoryDB.getCategoryById(req.params.id)

        //console.log("Curcategory  " +Curcategory)
        if (Curcategory === null)  res.send('Not found!');    
        else   res.send(Curcategory)
    
    }
    getCategoryIdByName=  (req,res)=>{
        //var CurcategoryId= await CategoryDB.getCategoryIdByName(req.query.name)
         CategoryDB.getCategoryIdByName(req.params.name)
        .then(data => {
            res.send(parseInt(data));
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving categories."
            });
          });
        

    }

}

const categoryController = new CategoryController();

module.exports = categoryController;

