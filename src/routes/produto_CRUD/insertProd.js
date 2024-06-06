import Model_produto from '../../models/produto_M.js'

//localhost:3001/produto

export async function insertProduct(nome, categoria, und_medida, cod_item,res){
    //**BREAKPOINT** TOLOWERCASE pode dar merda no futuro, o correto a se fazer é dentro do SGDB adotar um padrao, mas por enquanto ta funcionando entao ta tudo certo
    let nomeLower = nome.toLowerCase();
    let categoriaLower = categoria.toLowerCase();
    let undMedidaLower = und_medida.toLowerCase();
    try{
        const produto = await Model_produto.create({nome: nomeLower , categoria:categoriaLower , und_medida:undMedidaLower , cod_item:cod_item})
        console.table(produto)
        res.status(200).json(produto)
    }
    catch (ex){
        console.log("Error: "+ ex)
        res.status(500).json({ error: "Erro ao tentar inserir dados na tabela Produto" })
    }
}
