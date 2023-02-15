const { read } = require("fs");
const StoreDB=require("../dal/storesAccess.js")

class StoreController {
   getAllStores = async(req, res) => {
       console.log("HIIIIIIIIII");
        var stores = await StoreDB.getAllStores();
        res.send(stores);
    }
    // Delete a Tutorial with the specified id in the request
    delete=(req,res)=>{
        const id=req.params.id;
        StoreDB._delete(id)
        .then(num=>{
            if (num == 1) {
                res.send({
                  message: "Tutorial was deleted successfully!"
                });
              }else {
                res.send({
                  message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
              });
            });
        };
   // Create and Save a new Tutorial
   createNewStore= (req, res) => {
    // Validate request
    
  
    // Create a Store
    const StoreToInsert = req.body;
    if (!StoreToInsert) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    // Save Store in the database
    StoreDB.createNewStore(StoreToInsert)
      .then(data => {
        if(data)
        res.send(data);
        else res.status(400).json({ message: 'error' })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Store."
        });
      });
  };
    // createNewStore = async(req,res)=>
    // {
    //     const StoreToInsert = req.body;

    //     if (!StoreToInsert)  return res.status(400).json({ message: 'All fields are required'}) 

    //    const newStore=StoreDB.createNewStore(StoreToInsert)

    //     if (newStore) res.status(201).json({ message: 'created Store' })

       

    //     else res.status(400).json({ message: 'error' })
        
   
    // }

    // getStoreById= async (req,res)=>{
    //     console.log(req.params.id);
    //     var CurStore= await StoreDB.getStoreById(req.params.id)

    //     console.log("CurStore  " +CurStore)
    //     if (CurStore === null)  res.send('Not found!');    
    //     else   res.send(CurStore)
    
    // }

}

const storeController = new StoreController();

module.exports = storeController;

