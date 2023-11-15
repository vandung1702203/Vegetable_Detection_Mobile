const cloudinary = require("../../config/cloudinary.config");

async function uploadImages(req, res)
{
    try {
        const image = res.file
        
        const result = await cloudinary.uploader.upload(image);
        console.log(result);
        const uploadedImage = {
            url : result.secure_url,
            publicID : result.public_id
        }

        return res.status(200).json({
            message:"upload images succesfully",
            data : uploadedImage
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

module.exports = uploadImages;