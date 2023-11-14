const express = require('express')

const routes = require('./routes')
const path = require('path');

const app = express()

app.use(express.json());

const staticPath = path.join(__dirname, 'public');

app.get('/',(req,res) => {
    res.send('Vegetable_detection_mobile_api')
})

app.use(express.static(staticPath));
app.use('/public', express.static('public'))

app.use('/api/auth', routes.auth)
// app.use('/api/product', routes.product)
// app.use('/api/category',routes.category)
// app.use('/api/feedback', routes.feedback)
// app.use('/api/cart', routes.cart)
// app.use('/api/admin', routes.admin)
// app.use('/api/user', routes.user)
// app.use('/api/bill', routes.bill)

app.use('/api/upload', routes.uploadImage)

module.exports = app