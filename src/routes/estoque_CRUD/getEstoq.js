import cliente from '../../database/connect.mjs'

//Explicaçoes, essa funcao getEstoqueData executa uma query onde o cliente é o conector do meu banco de dados, em database/connect , no meu banco de dados postgresql, essa query roda e me retorna o nome categoria quantidade e ultimo preço do meu produto, tudo dinamicamente feito, entretanto pode haver alteraçoes no futuro e eu esquecer de arrumar esse comentario, mas em suma é isso

export async function getEstoqueData(id_produto, res) {
    try {
        const results = await cliente.query(`
            SELECT 
                P.nome, P.categoria,
                (SELECT SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 0 AND Est.id_produto = ${id_produto}) -
                (SELECT SUM(Est.quantidade) FROM public."Estoque" AS Est WHERE Est.tipo_mov = 1 AND Est.id_produto = ${id_produto}) AS qtd_estoque,
                (SELECT Est.preco_unitario FROM public."Estoque" AS Est WHERE Est.id_produto = ${id_produto} ORDER BY Est.data DESC LIMIT 1) AS Ultimo_preco
                
            FROM public."Estoque" AS E
            LEFT JOIN public."Produtos" AS P ON P.id = E.id_produto
            WHERE E.id_produto = ${id_produto}
            GROUP BY P.nome, P.categoria;
        `);

        //tive muitos problemas com pegar os dados vindos do json de results, a unica forma que encontrei para conseguir separar o json que vinha dos data que eu queria era selecionar ele com ose fosse um array, por isso o [0][0] pois o utilizar results.data retornava udefinded, enfim ta funcionando mas pode vir a parar de funcionar no futuro
        //**BREAKPOINT**
        res.status(200).json(results[0][0]);

        if (results.length > 0 && results[0].length > 0) {
            const firstResult = results[0][0]; // Acesse o primeiro objeto no array dentro de results[0]
            console.log('Nome:', firstResult.nome); // imprime o nome, por exemplo, 'morango' VARCHAR
            console.log('categoria:', firstResult.categoria); // imprime o categoria, por exemplo, 'fruta' VARCHAR
            console.log('qtd_estoque:', firstResult.qtd_estoque); // imprime o qtd_estoque, por exemplo, '20' ja fazendo a conta na query INTEGER
            console.log('ultimo_preco:', firstResult.ultimo_preco); // imprime o ultimo_preco, por exemplo, '15,99' FLOAT -> se nao me engano é double aqui, mas tanto faz
          }

    } catch (error) {
        console.error("Erro ao buscar dados do estoque!!!: ", error);
        res.status(500).json({ error: "Erro ao tentar buscar dados do estoque" });
    }
}
