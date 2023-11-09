"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            birthday: {
                type: Sequelize.DATE,
            },
            telephone: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            avatar: {
                type : Sequelize.BLOB('medium'),
            },
            account: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.CHAR,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("NOW"),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
