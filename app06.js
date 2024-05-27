// KITA AKAN MENGHINDARI METHOD USE PADA MIDDLEWARE DAN MENGGANTINYA DENGAN METHOD YANG SESUAI
// (GET,POST,PUT,DELETE)

//kita tambahkan express dan melakukan inisiasi express tanpa merequire http
const express = require('express')

//buat variabel yang menginisiasi express:
const app = express()

//kita buat objek/variabel yang mendeskripsikan reference ke file route yang dibuat
const myRoutes = require('./routes/route.js')

//cara mengatasi di terminal undefined:
app.use(express.urlencoded({
    extended:false
}))

//menambahkan kode program app.use(myRoutes) sehingga aplikasi yang dibuat dapat berjalan
app.use(myRoutes)

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})
