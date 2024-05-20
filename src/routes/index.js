import { Router } from "express";
import db from '../database/connect.mjs'
import {insertProduct} from './produto_CRUD/insertProd.js'
import { getProdByCategoria } from "./produto_CRUD/getprod.js";
import { insertEstoque } from "./estoque_CRUD/insertEstoq.js";

//import estoqueRouter from "./Estoque_Router.js";

const router = Router();

//router.use("/produto", insertProduct)



router.post("/produto" , (req,res) => {
    const {nome, categoria, und_medida , cod_item} = req.body
    console.log("nome: " + nome + "|| categoria: " + categoria + " || und_medida: " + und_medida + " || cod_item: " + cod_item)
    insertProduct(nome , categoria , und_medida , cod_item)
    return 1
})
router.get("/prod", (req,res) => {
    const {categoria} = req.body
    console.log("categoria : "+ categoria)
    getProdByCategoria(categoria , res)
})
router.post("/estoque" , (req,res) => {
    const {tipo_Movimento,data_Validade,quantidade,preco_Unitario,data_Compra_Venda,status} = req.body
    insertEstoque(tipo_Movimento,data_Validade,quantidade,preco_Unitario,data_Compra_Venda,status)
    return 1
})


export default router

