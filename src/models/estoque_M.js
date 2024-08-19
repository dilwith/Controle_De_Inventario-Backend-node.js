import { Sequelize } from "sequelize";
import db from '../database/connect.mjs'

const Model_estoque = db.define("Estoq",{
    tipo_mov: {
        type: Sequelize.INTEGER, // 0 (compra) -=- 1 (venda) -=- 2 (Estoque inicial) -=- 3 (Baixa -> Venceu etc)
        allowNull: true
    },
    data_validade: {
        type: Sequelize.DATE,  //pode ser null
        allowNull: true
    },
    quantidade: {
        type: Sequelize.INTEGER  //do mesmo produto
    },
    preco_unitario: {
        type: Sequelize.FLOAT,   //Preco unitario do produto relacionado na tabela
        allowNull: true
    },
    data: {
        type: Sequelize.DATE   //Data relativa a quando a compra é efetuada e de quando a venda é efeituada de um produto
    },
    id_produto: {
        type: Sequelize.INTEGER     //Referente ao produto que estou manipulando
    },

    //createdAt ------ updatedAt SOMENTE PARA O SEQUELIZE

    // **BREAKPOINT** Pois sequelize tende a colocar s no final de tudo essa bosta
},{
    tableName: 'Estoque', //Especifique o nome exato da tabela caso esteja conectando errado aqui
    timestamps: false,
})

export default Model_estoque



//CODIGO ANTIGO Caso queria dar uma olhada
/*
SELECT 

	CASE
        WHEN e.tipo_mov = 1 THEN SUM(E.quantidade)
        ELSE 0 
    END AS qtd_saida,
	CASE
        WHEN e.tipo_mov = 0 THEN SUM(E.quantidade)
        ELSE 0 
    END AS qtd_entrada,

P.nome , P.categoria from public."Estoque" AS E
LEFT JOIN public."Produtos" AS P
ON P.id = E.id_produto
WHERE E.id_produto = 3
GROUP BY P.nome , P.categoria , e.tipo_mov;

--------------------------------------------------- COM O CALCULO JA DO ESTOQUE ------------------------------------------------------------------------
SELECT 
	(select SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 0 AND Est.id_produto = 3) -
	(select SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 1 AND Est.id_produto = 3) AS qtd_estoque,
	(select Est.preco_unitario FROM public."Estoque" AS Est WHERE Est.id_produto = 3 ORDER BY Est.data DESC LIMIT 1) AS Ultimo_preco,
	
P.nome , P.categoria from public."Estoque" AS E
LEFT JOIN public."Produtos" AS P
ON P.id = E.id_produto
WHERE E.id_produto = 3
GROUP BY P.nome , P.categoria ;

*/