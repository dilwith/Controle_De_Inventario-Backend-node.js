import { Sequelize } from "sequelize";
import db from '../database/connect.mjs'

const Model_produto = db.define("Produtos",{
    nome: {
        type: Sequelize.STRING
    },
    categoria: {
        type: Sequelize.STRING
    },
    und_medida: {
        type: Sequelize.STRING
    },
    cod_item: {
        type: Sequelize.STRING
    }
    //createdAt ------ updatedAt SOMENTE PARA O SEQUELIZE
})

export default Model_produto