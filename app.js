import express from 'express';
import router from './src/routes/index.js';

//------------------------------------ |! SUMARIO !| ---------------------------------------------//
//**BREAKPOINT** --> PONTO IMPORTANTE DE VUNERABILIDADE DO CODIGO, resumo: pode dar merda no futuro entao da uma olhada nos breakpoints se tiver duvida



//DATABASE
import db from './src/database/connect.mjs'


//Teste DB com Sequelize
db.authenticate()
    .then(()=> console.log('Database Connected!'))
    .catch(err => console.log('Error:' + err))

const app = express()

process.env.PORT = 3001
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use('' , router)

app.listen(PORT , console.log(`Server running on PORT: ${PORT}!!`))