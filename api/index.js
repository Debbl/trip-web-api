const express = require('express')
const router = require("../routes/index.js")


const app = express()

app.use('/api', router)

// 静态文件
app.use(express.static('../public'))

module.exports = app;