"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Feedbacks", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            feedback_parent_id: {
                type: Sequelize.INTEGER,
            },
            content: {
                type: Sequelize.STRING,
            },
            user_id: {
                type: Sequelize.INTEGER,
            },
            fruit_id: {
                type: Sequelize.INTEGER,
            },
            star: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Feedbacks");
    },
};
