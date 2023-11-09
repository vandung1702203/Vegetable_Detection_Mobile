"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Fruits", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            origin: {
                type: Sequelize.STRING,
            },
            taste: {
                type: Sequelize.STRING,
            },
            nutrition: {
                type: Sequelize.STRING,
            },
            color: {
                type: Sequelize.STRING,
            },
            season: {
                type: Sequelize.STRING,
            },
            medical: {
                type: Sequelize.STRING,
            },
            star: {
                allowNull: false,
                type: Sequelize.FLOAT,
                defaultValue : 5.0,
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
        await queryInterface.dropTable("Fruits");
    },
};
