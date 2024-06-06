import Model_produto from '../../models/produto_M.js'
import cliente from '../../database/connect.mjs'

export async function getProdByCategoria(categoria,res){
    //**BREAKPOINT** to lower case foi colocado apenas como padrao aqui pois o postgre é case sensitive, entao cuidado 
    let aux = categoria.toLowerCase()
    try {
        const produtos = await Model_produto.findAll({
            where: {
                categoria: aux
            }
        });
        console.log(produtos);
        res.status(200).json(produtos); // Envia os resultados de volta na resposta HTTP
    } catch (error) {
        console.error("Erro ao buscar produtos por categoria: ", error);
        res.status(500).json({ error: "Erro ao buscar produtos por categoria" });
    }
    
} 

export async function getProdByNome(nome , res){
    let aux2 = nome.toLowerCase()
    try{
    const produto = await cliente.query(`
        SELECT prod.* FROM public."Produtos" AS prod
        WHERE prod.nome LIKE '%${aux2}%'
    `) 
    console.log(produto);
    res.status(200).json(produto[0]);
    }
    catch{
        res.status(500).json({ error: "Erro ao buscar produtos por ID" });
    }
}