import { Sequelize } from "sequelize";

//--------------------------SEQUELIZE ----------------------------------

const cliente = new Sequelize('Electron_Projeto', 'postgres', 'aluno', {
    host: 'localhost',
    dialect:  'postgres' 
  })

  export default cliente






/*  // ANTIGO CONEXAO COM O BANCO DE DADOS POSTGREE -> SEM SEQUELIZE

import pkg from 'pg';
const { Client } = pkg;
const cliente = new Client({
    user : "postgres",
    password: "aluno",
    host: "127.0.0.1",
    port: 5432,
    database: "Electron_Projeto"
})

export { cliente };
*/


