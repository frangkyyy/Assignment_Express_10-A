//kita tambahkan express dan melakukan inisiasi express tanpa merequire http
const express = require('express')

//buat variabel yang menginisiasi express:
const app = express()

//middleware pada express berfungsi untuk memproses request ke middleware yg lain
app.use((req, res, next) => {
    console.log('In middleware 1')
    next()
})

app.use((req, res) => {
    console.log('In middleware 2')
    res.send(`<h1>Hello from express</h1>`)
})
// ketika kita refresh halaman, kita tidak akan melihat hasil proses dari middleware 2 yang dibuat
// karena node.js server akan memproses middleware secara berurutan dari atas ke bawah
// hal tersebut dikarenakan karena setelah request masuk ke salah satu middleware (1), kita tidak meneruskan request tersebut.
// solusi: menambahkan argumen ke3 untuk callback function next pada middleware yang pertama.

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})
