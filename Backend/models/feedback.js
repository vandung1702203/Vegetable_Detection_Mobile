'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FeedBack extends Model {
        static associate(models) {
            // User.hasOne(models.Wallet, { foreignKey: 'user_id' })
            // User.hasMany(models.FeedBack, {foreignKey : 'user_id'})
            // User.hasMany(models.Cart, {foreignKey : 'user_id'})
            // User.hasMany(models.Bill, {foreignKey : 'user_id'})
        }
    }
    FeedBack.init(
        {
            feedback_parent_id: DataTypes.STRING,
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
            modelName: 'FeedBack',
        },
    )
    return FeedBack
}
