import Model_produto from '../../models/produto_M.js'

export async function getProdByCategoria(categoria,res){
    let aux = categoria.toLowerCase()
    console.log("aux : " + aux)
    console.log("categoria : " + categoria)
    console.log("********------------------------------------------------------********")
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