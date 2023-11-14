'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FeedBack extends Model {
        static associate(models) {
            FeedBack.belongsTo(models.Fruit, { foreignKey: 'fruit_id' })
            FeedBack.belongsTo(models.User, { foreignKey: 'user_id' })
            FeedBack.hasMany(models.FeedBack, {foreignKey : 'feedback_parent_id'})
            FeedBack.hasMany(models.FeedBackImage, {foreignKey : 'feedback_id'})
        }
    }
    FeedBack.init(
        {
            feedback_parent_id: DataTypes.STRING,
            content : DataTypes.STRING,
            user_id : DataTypes.INTEGER,
            fruit_id : DataTypes.INTEGER,
            star: DataTypes.INTEGER,
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
