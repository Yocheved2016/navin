module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: { type: DataTypes.STRING, unique: true }    
    },

        {
            timestamps: false
        }
        // ,
        // {
        //     freezeTableName: true
        // }
    );

    return Category;
}