const { randomUUID } = require('crypto');

const express = require('express')

const router = express.Router();
const path = require('path')
const basePath = path.join(__dirname,'../templates')


router.use(express.json());

router.get('/', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
    })
    
    // router.get('/cadastrarProdutos.html', (req, res)=>{
    // res.sendFile(`${basePath}/cadastrarProdutos.html`)
    // })

    router.get('/visualizarProdutos.html', (req, res)=>{
        res.sendFile(`${basePath}/visualizarProdutos.html`)
        })
    
        const produtos = [];

    router.post('/cadastrar',(req, res)=>{
        const {preco, nome, desc} = req.body

        const produto = {
            id:randomUUID(),
            nome,
            preco,
            desc
        }

        produtos.push(produto);
        return res.json(produto);

        
        
    })

    router.get('/cadastrar',(req,res)=>{
return res.json(produtos)
    })


router.delete('/produtos/:id',(req,res)=>{
    const { id } = req.params

    const produto = produtos.findIndex((produtos) => produto.id === id)

    produtos.splice(produto, 1);

    return res.json({"message":"produto deletado com sucesso"})

})
router.put('/produtos/:id',(req,res)=>{
    const { id } = req.params
    const {nome, preco, desc} = req.body
    const produtoIndex = produtos.findIndex((produtos) => produtos.id === id);

    if(produtoIndex === -1 ){
        return res.status({"message":"produto não encontrado"})
    }
    
    const produtoAtualizado ={
        id,
        nome,
        preco,
        desc
    }

    produtos[produtoIndex] = produtoAtualizado;
    return res.json(produtoAtualizado)

})






    module.exports = router

