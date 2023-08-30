const mysql = require('mysql2')
const express = require('express')

const app = express()
const  connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'aluno_medio',
    password:'@lunoSenai23.',
    database:'produtos'

})

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.post('/cadastrar',(req,res)=>{
    connection.query('INSERT INTO tb_produtos(nome, preco, descricao) VALUES (? ? ?)',[nome, preco, desc] ,(error, result)=>{
        if(error){
            console.Console.log(error) 
            return res.status(500).json({error:"opa parece que deu algo errado por aqui... "})
        }
        const inserirProdutos = {
            id,
            nome,
            preco,
            desc
        }

        return res.json(inserirProdutos)
    })
})

const port = 3270
app.listen(port, ()=>{
    console.log('rodandokkk')
})
