const conexao = require('../database/connection')


async function addUsuario(dados){
try {
let [exec] = await conexao.query(`
    
    insert into tb_usuario(
    nome,
    sobrenome,
    senha,
    dt_nascimento,
    email,
    id_tipo
    ) values(
    ?,
    ?,
    ?,
    ?,
    ?,
    ? 
    )
    
    `,[
        dados.nome,
        dados.sobrenome,
        dados.senha,
        dados.dt_nascimento,
        dados.email,
        dados.tipo
    ])
    return exec.affectedRows
} catch(e){
    return e;
}


}


module.exports = {
    addUsuario
}