import Model_produto from '../../models/produto_M.js'

//localhost:3001/produto

export async function insertProduct(nome, categoria, und_medida, cod_item){
    let nomeLower = nome.toLowerCase();
    let categoriaLower = categoria.toLowerCase();
    let undMedidaLower = und_medida.toLowerCase();
    try{
        const produto = await Model_produto.create({nome: nomeLower , categoria:categoriaLower , und_medida:undMedidaLower , cod_item:cod_item})
        console.table(produto)
        return produto
    }
    catch (ex){
        console.log("Error: "+ ex)
    }
}
