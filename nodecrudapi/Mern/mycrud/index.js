require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(express.json());
app.use(bodyParser.json())
app.listen(4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)