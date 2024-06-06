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
    //**BREAKPOINT** Nao estou especificando o nome exato da tabela como na model de estoque, mas ta funcionando entao tudo certo, se der merda so copiar o que fiz na model de estoque :D
})

export default Model_produto