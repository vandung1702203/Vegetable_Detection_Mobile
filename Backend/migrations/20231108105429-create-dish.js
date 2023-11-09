"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Dishes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fruit_id: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            taste: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("Dishes");
    },
};
