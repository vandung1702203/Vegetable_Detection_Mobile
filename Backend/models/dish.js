'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Dish extends Model {
        static associate(models) {
            Dish.hasMany(models.DishImage, {foreignKey : 'dish_id'})
            Dish.hasMany(models.LikeDish, {foreignKey : 'dish_id'})
            Dish.belongsTo(models.Fruit, {foreignKey : 'fruit_id'})
        }
    }
    Dish.init(
        {
            name: DataTypes.STRING,
            description : DataTypes.STRING,
            fruit_id : DataTypes.INTEGER,
            taste: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
        },
        {
            sequelize,
            modelName: 'Dish',
        },
    )
    return Dish
}
