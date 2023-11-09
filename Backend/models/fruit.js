'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class Fruit extends Model {
        static associate(models) {
            // User.hasOne(models.Wallet, { foreignKey: 'user_id' })
            // User.hasMany(models.FeedBack, {foreignKey : 'user_id'})
            // User.hasMany(models.Cart, {foreignKey : 'user_id'})
            // User.hasMany(models.Bill, {foreignKey : 'user_id'})
        }
    }
    Fruit.init(
        {
            name: DataTypes.STRING,
            origin : DataTypes.STRING,
            taste : DataTypes.STRING,
            nutrition: DataTypes.STRING,
            color : DataTypes.STRING,
            season : DataTypes.STRING,
            medical : DataTypes.STRING,
            star: DataTypes.FLOAT,
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
            modelName: 'Fruit',
        },
    )
    return Fruit
}
