'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class FeedbackImage extends Model {
        static associate(models) {
        }
    }
    FeedbackImage.init(
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
            modelName: 'FeedbackImage',
        },
    )
    return FeedbackImage
}
