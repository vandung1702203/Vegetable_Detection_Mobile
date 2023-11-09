const { Op } = require("sequelize");
const models = require(process.cwd() + "/models");
const { getCurrentDateTime } = require(process.cwd() + "/helpers/datetime");

// async function showById(id) {
//     return models.User.findByPk(id, { include: include });
// }

async function showByAccount(account) {
    return models.User.findOne({
        where: { account: account },
    });
}

// async function create(newUser) {
//     return models.User.create(newUser);
// }

// async function update(updateUser, id) {
//     return models.User.update(updateUser, { where: { id: id } });
// }

// async function destroy(id) {
//     const now = getCurrentDateTime();

//     const updateUser = {
//         deletedAt: now,
//     };
//     await update(updateUser, id);
// }

// async function showAllUser() {
//     return await models.User.findAll({
//         where: {
//             deletedAt: null,
//         },
//         attributes: [
//             "id",
//             "name",
//             "gender",
//             "birthday",
//             "email",
//             "telephone",
//             "address",
//             "avatar_url",
//         ],
//     });
// }

// async function showUserById(id) {
//     return await models.User.findByPk(id, {
//         attributes: {
//             exclude: ["password"],
//         },
//     });
// }

module.exports = {
    // getUserById: showById,
    getUserByAccount: showByAccount,
    // addNewUser: create,
    // updateUserById: update,
    // softDeleteUserById: destroy,
    // showAllUser: showAllUser,
    // showUserById: showUserById,
};
