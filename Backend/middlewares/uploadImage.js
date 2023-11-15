const multer = require('multer')
const mutler = require('multer')

function uploadImageToCloudinary(){

}

function uploadImageToPredict()
{   
    const upload = mutler({storage : multer.memoryStorage()})
    return upload   
}

module.exports = {
    uploadImageToPredict : uploadImageToPredict,
}