const { randomUUID } = require('crypto');
const { response } = require('express');

const express = require('express')

const router = express.Router();
const path = require('path')
const basePath = path.join(__dirname,'../templates')


router.use(express.json());

router.get('/', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
    })
    
    router.get('/cadastrarProdutos.html', (req, res)=>{
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
    })

    router.get('/visualizarProdutos.html', (req, res)=>{
        res.sendFile(`${basePath}/visualizarProdutos.html`)
        })
    
        const produtos = [];

    router.post('/cadastrarProdutos.html',(req, res)=>{
        const {preco, name, desc} = req.body

        const produto = {
            id:randomUUID(),
            name,
            preco,
            desc
        }

        produtos.push(produto);
        return res.json(produto);

        
        
    })

    router.get('/cadastarProdutos.html',(req,res)=>{
return res.json(produtos)
    })

    module.exports = router

