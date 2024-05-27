const http = require('http')
const express = require('express')

//buat variabel yang menginisiasi express:
const app = express()

const server = http.createServer(app)
server.listen(8000, () => {
    console.log('Server is running at port 8000')
})