"use strict";
const fs = require("fs");
const path = require("path");
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const filePath = path.join(
            __dirname,
            "../public/Pictures/default-avatar.png"
        );
        const defaultAvatarBuffer = fs.readFileSync(filePath);

        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Nguyen Van Dung",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: defaultAvatarBuffer, // Chuyển đổi hình ảnh thành Buffer
                    account: "dung1702",
                    password: hashHelper.hash("dung123"),
                },
                {
                    name: "Phạm Duy Tin",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: defaultAvatarBuffer, // Chuyển đổi hình ảnh thành Buffer
                    account: "phamduytin",
                    password: hashHelper.hash("tin123"),
                },
                {
                    name: "Lê Tuấn Nguyên Khôi",
                    gender: "Male",
                    birthday: "2003-02-17",
                    telephone: "0905116391",
                    address: "Number 1 in your heart",
                    avatar: defaultAvatarBuffer, // Chuyển đổi hình ảnh thành Buffer
                    account: "letuannguyenkhoi",
                    password: hashHelper.hash("khoi123"),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
