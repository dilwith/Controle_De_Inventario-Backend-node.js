import { Sequelize } from "sequelize";

//--------------------------SEQUELIZE ----------------------------------

//**BREAKPOINT** É APENAS A CONEXAO COM O BD MAS CUIDADO -> Verifique o usuario a senha etc...
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


