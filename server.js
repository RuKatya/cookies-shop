const express = require('express')
const app = express()
const PORT = process.env.PORT || 4578
app.use(express.static("client/build"))
app.use(express.json())

const {DBConnect} = require('./DBConnect')

DBConnect;

app.listen(PORT, ()=>{
    console.log(`listen on http://localhost:${PORT}`)
})