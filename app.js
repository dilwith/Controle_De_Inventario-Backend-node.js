import express from 'express';
import router from './src/routes/index.js';

//CONFIG CORS --> 1 ERRO DO CORS : Foi gerado na geração do PDF, quando tentei utilizar uma rota http pra acessar outra http, no caso a GetEstoqueData

import cors from 'cors';

//APP express deve ser iniciado no inicio antes de tudo
const app = express()
//Estou cetando a getEstoqueData como uma rota que nao precisa do CORS pra funcioanr, caso seja necessario pode colocar mais rotas aqui
import { getEstoqueData } from './src/routes/estoque_CRUD/getEstoq.js';
app.use(cors());

app.get('/estoque', async (req, res) => {
    const id_produto = req.query.id_produto;
    if (!id_produto) {
        return res.status(400).json({ error: "id_produto é necessário" });
    }
    await getEstoqueData(id_produto, res);
});


//------------------------------------ |! SUMARIO !| ---------------------------------------------//
//**BREAKPOINT** --> PONTO IMPORTANTE DE VUNERABILIDADE DO CODIGO, resumo: pode dar merda no futuro entao da uma olhada nos breakpoints se tiver duvida



//DATABASE
import db from './src/database/connect.mjs'


//Teste DB com Sequelize
db.authenticate()
    .then(()=> console.log('Database Connected!'))
    .catch(err => console.log('Error:' + err))

process.env.PORT = 3001
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use('' , router)

app.listen(PORT , console.log(`Server running on PORT: ${PORT}!!`))