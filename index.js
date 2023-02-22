const express = require('express')
const app = express()
const port = 3000

const appId = Math.random().toString()

app.get('/', (req, res) => {
  res.send({
    appId,
    msg: "hello world 8"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})