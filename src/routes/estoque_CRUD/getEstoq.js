import cliente from '../../database/connect.mjs'

export async function getEstoqueData(req, res) {
    try {
        const results = await cliente.query(`
            SELECT 
                P.nome, P.categoria,
                (SELECT SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 0 AND Est.id_produto = 3) -
                (SELECT SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 1 AND Est.id_produto = 3) AS qtd_estoque,
                (SELECT Est.preco_unitario FROM public."Estoque" AS Est WHERE Est.id_produto = 3 ORDER BY Est.data DESC LIMIT 1) AS Ultimo_preco
                
            FROM public."Estoque" AS E
            LEFT JOIN public."Produtos" AS P ON P.id = E.id_produto
            WHERE E.id_produto = 3
            GROUP BY P.nome, P.categoria;
        `);
        res.status(200).json(results[0][0]);

        if (results.length > 0 && results[0].length > 0) {
            const firstResult = results[0][0]; // Acesse o primeiro objeto no array dentro de results[0]
            console.log('Nome:', firstResult.nome); // imprime o nome, por exemplo, 'morango'
            console.log('categoria:', firstResult.categoria); // imprime o nome, por exemplo, 'morango'
            console.log('qtd_estoque:', firstResult.qtd_estoque); // imprime o nome, por exemplo, 'morango'
            console.log('ultimo_preco:', firstResult.ultimo_preco); // imprime o nome, por exemplo, 'morango'
          }

    } catch (error) {
        console.error("Erro ao buscar dados do estoque: ", error);
        res.status(500).json({ error: "Erro ao tentar buscar dados do estoque" });
    }
}
