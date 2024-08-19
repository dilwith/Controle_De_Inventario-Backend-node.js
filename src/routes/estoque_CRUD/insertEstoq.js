import cliente from '../../database/connect.mjs'; // Certifique-se de que você está importando a instância correta do sequelize
import Model_estoque from '../../models/estoque_M.js';

export async function insertEstoque(tipo_Movimento, data_Validade, quantidade, preco_Unitario, data, id_produto, res) {
    // Iniciar a transação
    const t = await cliente.transaction();

    try {
        // Inserir os dados na tabela estoque com a transação
        //console.log("!" + tipo_Movimento + "---" + data_Validade +"---" + quantidade +"---" +preco_Unitario +"---" + data + "---"+ id_produto) 
        const estoque = await Model_estoque.create({
            tipo_mov: tipo_Movimento,
            data_validade: data_Validade,
            quantidade: quantidade,
            preco_unitario: preco_Unitario,
            data: data,
            id_produto: id_produto
        }, { transaction: t });

        // Confirmar a transação
        await t.commit();

        // Enviar os resultados de volta na resposta HTTP
        res.status(200).json(estoque);
    } catch (error) {
        console.error("Erro ao inserir em estoque: ", error);

        // Desfazer a transação em caso de erro
        await t.rollback();

        // Enviar uma resposta de erro HTTP
        res.status(500).json({ error: "Erro ao tentar inserir dados na tabela Estoque" });
    }
}