const express = require('express')
const router = require("../routes/index.js")


const app = express()

app.all('*',  (req, res, next) =>  {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization'); 
  next();
})

app.use('/api', router)

// 静态文件
app.use(express.static('../public'))

module.exports = app;