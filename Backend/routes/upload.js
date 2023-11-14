// routes/auth.js
const express = require('express');

const router = express.Router();

const uploadImages = require('../controllers/api/uploadImages')

const dotenv = require('dotenv');
dotenv.config();

const {CloudinaryStorage} = require('multer-storage-cloudinary');

const multer = require('multer')

const cloudinary = require('../config/cloudinary.config');

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "pbl4",
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
    }
})

const upload = multer({storage : storage})

router.post('/uploadImage',upload.single("file"), uploadImages);

// router.post('/register', authController.register)

module.exports = router;
