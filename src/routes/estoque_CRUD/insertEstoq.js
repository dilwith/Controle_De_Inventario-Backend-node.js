import Model_estoque from '../../models/estoque_M.js'

export async function insertEstoque( tipo_Movimento,data_Validade,quantidade,preco_Unitario,data , res){
    try{
        const estoque = await Model_estoque.create({tipo_mov: tipo_Movimento , data_validade:data_Validade , quantidade:quantidade , preco_unitario:preco_Unitario , data:data})
        console.table(estoque)
        res.status(200).json(estoque); // Envia os resultados de volta na resposta HTTP
    }
    catch (error){
        console.error("Erro ao inserir em estoque : ", error);
        //res.status(500).json({ error: "Erro ao tentar inserir dados na tabela Estoque" });
    }
}