// routes/auth.js
const express = require('express');

const router = express.Router();

const predictImage = require('../controllers/api/predictImage')

const dotenv = require('dotenv');
const { uploadImageToPredict } = require('../middlewares/uploadImage');
dotenv.config();


router.post('/predictImage', uploadImageToPredict().single('image') ,predictImage);

// router.post('/register', authController.register)

module.exports = router;
