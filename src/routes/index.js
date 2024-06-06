import { Router } from "express";
import db from '../database/connect.mjs'
import {insertProduct} from './produto_CRUD/insertProd.js'
import { getProdByCategoria, getProdByNome } from "./produto_CRUD/getprod.js";
import { insertEstoque } from "./estoque_CRUD/insertEstoq.js";
import { getEstoqueData } from "./estoque_CRUD/getEstoq.js";


const router = Router();

//INDEX -> ONDE EU CRIO MINHAS ROTAS, APP CHAMA INDEX -> INDEX CHAMA ARQUIVOS ... seguindo a ordem de chamada da API do axios seria : APP.JS -> INDEX.JS -> ARQUIVOS(FUNCOES)


router.post("/produto/insert" , (req,res) => {
    const {nome, categoria, und_medida , cod_item} = req.body
    console.log("nome: " + nome + "|| categoria: " + categoria + " || und_medida: " + und_medida + " || cod_item: " + cod_item)
    insertProduct(nome , categoria , und_medida , cod_item, res)
})
router.get("/produto/nome", (req,res) => {
    const {nome} = req.body
    console.log("categoria : "+ nome)
    getProdByNome(nome , res)
})
router.get("/produto/categoria", (req,res) => {
    const {categoria} = req.body
    console.log("categoria : "+ categoria)
    getProdByCategoria(categoria , res)
})
router.post("/estoque" , (req,res) => {
    const {tipo_Movimento,data_Validade,quantidade,preco_Unitario,data_Compra_Venda,status} = req.body
    insertEstoque(tipo_Movimento,data_Validade,quantidade,preco_Unitario,data_Compra_Venda,status , res)
})
router.get('/estoque', (req,res) =>{
    const {id_produto} = req.body
    console.log("id_produto :" + id_produto)
    getEstoqueData(id_produto , res)
});

router.get("/venda", )

export default router

