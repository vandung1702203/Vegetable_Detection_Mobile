'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FeedBackImage extends Model {
        static associate(models) {
            FeedBackImage.belongsTo(models.FeedBack, {foreignKey : 'feedback_id'})
        }
    }
    FeedBackImage.init(
        {
            feedback_id: DataTypes.INTEGER,
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
            modelName: 'FeedBackImage',
        },
    )
    return FeedBackImage
}
