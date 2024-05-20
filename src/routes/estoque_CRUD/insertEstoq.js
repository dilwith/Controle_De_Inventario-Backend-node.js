import Model_estoque from '../../models/estoque_M.js'

export async function insertEstoque( tipo_Movimento,data_Validade,quantidade,preco_Unitario,data_Compra_Venda,status , res){
    try{
        const estoque = await Model_estoque.create({tipo_Movimento: tipo_Movimento , data_Validade:data_Validade , quantidade:quantidade , preco_Unitario:preco_Unitario , data_Compra_Venda:data_Compra_Venda , status:status})
        console.table(estoque)
        res.status(200).json(estoque); // Envia os resultados de volta na resposta HTTP
    }
    catch (error){
        console.error("Erro ao inserir em estoque : ", error);
        res.status(500).json({ error: "Erro ao tentar inserir dados na tabela Estoque" });
    }
}