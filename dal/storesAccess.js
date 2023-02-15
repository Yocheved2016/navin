
const db=require('../models/index.js')
const Store=db.stores


 const createNewStore =  (storeToInsert) => {
   

     Category.create(storeToInsert)
    
   
 } 

const getAllStores= async ()=>{
      
    return await Store.findAll();
     } 
const _delete=(id)=>{
    Store.destroy({
        where:{Id:id}
    })
}
// const getCategoryById= async (id)=>{
//     return await Category.findByPk(id);
   
// } 

 module.exports={
createNewStore,
getAllStores,
_delete
//     getCategoryById
    
}