import { Sequelize } from "sequelize";
import db from '../database/connect.mjs'

const Model_estoque = db.define("Estoque",{
    tipo_Movimento: {
        type: Sequelize.INTEGER, // 0 (compra) -=- 1 (venda)
        allowNull: true
    },
    data_Validade: {
        type: Sequelize.DATE,  //pode ser null
        allowNull: true
    },
    quantidade: {
        type: Sequelize.INTEGER  //do mesmo produto
    },
    preco_Unitario: {
        type: Sequelize.FLOAT,   //Preco unitario do produto relacionado na tabela
        allowNull: true
    },
    data_Compra_Venda: {
        type: Sequelize.DATE   //Data relativa a quando a compra é efetuada e de quando a venda é efeituada de um produto
    },
    status : {
        type: Sequelize.INTEGER,   // status = 0 -> em procedimento de compra ou venda -=- status = 1 compra ou venda efetivada com sucesso ------> (status = 1 && tipo_Movimentacao = 1 pode-se vender esse produto ) // (status = 0 && tipo_Movimentacao = 0 ou 1: item em transacao 0 de compra do produto - 1 de venda do produto)
        allowNull: true
    },
    /*
    percentual_Lucro: {
        type: Sequelize.FLOAT   //
    },
    */
    //createdAt ------ updatedAt SOMENTE PARA O SEQUELIZE
})

export default Model_estoque