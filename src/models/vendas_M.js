import { Sequelize } from "sequelize";
import db from '../database/connect.mjs'

const Model_venda = db.define("vendas",{
    //id_estoque, data , valor_venda , quantidade
},{
    tableName: 'vendas', 
    timestamps: false,
})

export default Model_venda

