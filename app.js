const express = require('express')
const router = require("./routes/index.js")


const app = express()
const port = 3000

app.use('/api', router)

// 静态文件
app.use(express.static('public'))
// 监听端口
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})