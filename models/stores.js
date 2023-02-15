module.exports = (sequelize, DataTypes) => {
    const Store = sequelize.define('stores', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       
        Name: { type: DataTypes.STRING, unique: true },
        LocationCode :{
            
            type: DataTypes.INTEGER
        },
        
            
    OwnerId :{
        
        type: DataTypes.INTEGER,
        // references: {
        //     // This is a reference to another model
        //     model: stores_owners,
      
        //     // This is the column name of the referenced model
        //     key: 'Id'}
    }}
    ,
        {
            timestamps: false
        }
        // ,
        // {
        //     freezeTableName: true
        // }
    );

    return Store;
}