const connection= require('../database/connection')
async function getTodos (){
    try{
        let [rows]=await connection.query('select * from tb_produto')
        return rows
    }catch(e){
        return e
    }
}