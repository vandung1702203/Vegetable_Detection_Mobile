"use strict";
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    
    async up(queryInterface, Sequelize) {
        const filePath = path.join(__dirname, '../public/Pictures/default-avatar.png');
        const defaultAvatarBuffer = fs.readFileSync(filePath);

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
                defaultValue : defaultAvatarBuffer,
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
