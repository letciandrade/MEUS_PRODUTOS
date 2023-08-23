const express = require('express')
const app = express()
const port = 3308

const path = require('path')
const basePath = path.join(__dirname, 'templates')
const router = require('./routers/produto.js')


app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`servidor on na porta ${port}`)
})
