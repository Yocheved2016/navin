
const db=require('../models/index.js')
const Category=db.categories


const createNewCategory = async (categoryToInsert) => {
   

    return await Category.create(categoryToInsert)
    
   
} 

const getAllCategories= async ()=>{
        return await Category.findAll();
} 

const getCategoryById= async (id)=>{
    return await Category.findByPk(id);
   
} 
const getCategoryIdByName= async (name)=>{
      const data=await Category.findOne({ where: { Name: name } });
   return data.Id;
} 


module.exports={
    createNewCategory,
    getAllCategories,
    getCategoryById,
    getCategoryIdByName
    
}