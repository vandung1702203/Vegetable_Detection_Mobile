// const { showUserById, updateUserById } = require("../CRUD/user");

// const validators = require(process.cwd() + "/helpers/validators");

// require("dotenv").config();

// async function getUserById(request, response) {
//     try {
//         const userId = request.params.id;
//         const profile = await showUserById(userId);
//         return response.status(200).json({
//             message: "Success get profile",
//             profile: profile,
//         });
//     } catch (error) {
//         return response.status(500).json({
//             message: "Something went wrong!",
//             error: error,
//         });
//     }
// }

// async function updateAva(request, response) {
//     try {
//         const token = request.headers.authorization.split(" ")[1];

//         const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

//         const userID = decode.id;

//         if (!request.body.image)
//             return response.status(401).json({
//                 message: "Can't find photo to change",
//             });

//         const updateUser = {
//             avatar_url:
//                 process.env.WEB_URL + "/images/avatars/" + request.body.image,
//         };

//         updateUserById(updateUser, userID);

//         return response.status(200).json({
//             message: "Change avatar successfull",
//         });
//     } catch (error) {
//         return response.status(500).json({
//             message: "Something went wrong",
//             error: error,
//         });
//     }
// }

// async function updateUser(request, response) {
//     try {
//         const token = request.headers.authorization.split(" ")[1];

//         const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

//         //Bearer {token}
//         const profile = await showUserById(decode.id);
//         const updateUser = {
//             name: request.body.name ? request.body.name : profile.name,
//             gender: request.body.gender ? request.body.gender : profile.gender,
//             birthday: request.body.birthday
//                 ? request.body.birthday
//                 : profile.birthday,
//             email: request.body.email ? request.body.email : profile.email,
//             telephone: request.body.telephone
//                 ? request.body.telephone
//                 : profile.telephone,
//             address: request.body.address
//                 ? request.body.address
//                 : profile.address,
//         };

//         const validateResponse = validators.validateUser(updateUser);
//         if (validateResponse !== true) {
//             return response.status(400).json({
//                 message: "Validation failed!",
//                 errors: validateResponse,
//             });
//         }
//         updateUserById(updateUser, decode.id).then(() =>
//             response.status(200).json({
//                 message: "Update user successfull !",
//             })
//         );
//     } catch (error) {
//         return response.status(500).json({
//             message: "Something went wrong!",
//             error: error,
//         });
//     }
// }

// module.exports = {
//     getUserById: getUserById,
//     updateAva: updateAva,
//     updateUser: updateUser,
// };