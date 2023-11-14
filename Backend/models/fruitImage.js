'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FruitImage extends Model {
        static associate(models) {
            FruitImage.belongsTo(models.Fruit, {foreignKey : 'fruit_id'})
        }
    }
    FruitImage.init(
        {
            fruit_id: DataTypes.INTEGER,
            image : DataTypes.STRING,
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
            modelName: 'FruitImage',
        },
    )
    return FruitImage
}
