'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`)
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.FeedBack, {foreignKey : 'user_id'})
            User.hasMany(models.LikeDish, {foreignKey : 'user_id'})
            User.hasMany(models.LikeFruit, {foreignKey : 'user_id'})
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            gender : DataTypes.STRING,
            birthday : DataTypes.DATE,
            telephone: DataTypes.STRING,
            address : DataTypes.STRING,
            avatar : DataTypes.STRING,
            account : DataTypes.STRING,
            password: DataTypes.CHAR,
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
            modelName: 'User',
        },
    )
    return User
}
