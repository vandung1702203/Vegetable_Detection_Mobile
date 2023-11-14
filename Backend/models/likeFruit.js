'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class LikeFruit extends Model {
        static associate(models) {
            LikeFruit.belongsTo(models.User, {foreignKey : 'user_id'})
            LikeFruit.belongsTo(models.Fruit, {foreignKey : 'fruit_id'})
        }
    }
    LikeFruit.init(
        {
            fruit_id: DataTypes.INTEGER,
            user_id : DataTypes.INTEGER,
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
            modelName: 'LikeFruit',
        },
    )
    return LikeFruit
}