// KITA AKAN MENGHINDARI METHOD USE PADA MIDDLEWARE DAN MENGGANTINYA DENGAN METHOD YANG SESUAI
// (GET,POST,PUT,DELETE)

//kita tambahkan express dan melakukan inisiasi express tanpa merequire http
const express = require('express')

//buat variabel yang menginisiasi express:
const app = express()

//cara mengatasi di terminal undefined:
app.use(express.urlencoded({
    extended:false

}))

app.get('/page1', (req, res) => {
    res.send(`
    <form method="post" action="/page2">
    <label for="name-id">Name</label>
    <input type="text" id="name-id" name="name" autofocus>
    <button type="submit">Submit</button>
</form>
    `)
})
// ketika kita refresh halaman, kita tidak akan melihat hasil proses dari middleware 2 yang dibuat
// karena node.js server akan memproses middleware secara berurutan dari atas ke bawah
// hal tersebut dikarenakan karena setelah request masuk ke salah satu middleware (1), kita tidak meneruskan request tersebut.
// solusi: menambahkan argumen ke3 untuk callback function next pada middleware yang pertama.
// tambahkan ${req.body.name} = menampilkan data yang dikirimkan dari form
//                      name: salah satu request yang dikirim ke page2 (didapat dari atribute name di form)
app.post('/page2', (req, res) => {
    //untuk mendapat hasil request dari form, tambahkan console.log(req.body)
    console.log(req.body)
    res.send(`
        <h1>Hello from express page 2</h1>
        <p>Hello, ${req.body.name}</p>
    `)
    })

//middleware pada express berfungsi untuk memproses request ke middleware yg lain
//kita akan menambah string berupa url sebagai argumen pertama sebelum callback functions
app.get('/',(req, res, next) => {
    res.send(`<h1>Hello from express</h1>`)
})

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})
