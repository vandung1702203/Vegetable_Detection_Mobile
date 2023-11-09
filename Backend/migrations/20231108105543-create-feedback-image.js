"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("FeedbackImages", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            feedback_id: {
                type: Sequelize.INTEGER,
            },
            image : {
                type : Sequelize.BLOB('medium'),
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
        await queryInterface.dropTable("FeedbackImages");
    },
};
