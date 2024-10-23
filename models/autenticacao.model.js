//Insere a conexão com o banco de dados dentro do modelo

const conexao = require("../database/connection");
//Cria uma função assíncrona para o modelo
//Função de autenticação requer usuário e senha
async function autenticaUsuario(usuario, senha) {
  //Utiliza estrutura de decisão try...catch para tentar
  //A conexão com o banco de dados e execução da query
  try {
    //Executa a query e armazena a resposta
    const [exec] = await conexao.query(
      `select
    id_usuario
    from tb_usuario
    where email = ? and senha = ?`,
      [usuario, senha]
    );
    //Retorna a resposta
    return exec;
  } catch (erro) {
    //Caso haja algum erro, coloca dentro da variável erro
    //E usa a função return para retornar para o usuário

    return erro;
  }
}

module.exports = {
  autenticaUsuario,
};
