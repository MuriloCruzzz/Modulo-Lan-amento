//incluindo express geral
// criando o app.js aplicativo geral
// incluindo a dependencia do mysql para gerenciamento do mariadb

import express from "express"
const app = express();


//Testar Conexão com Base de Dados
const db =
    import ("./db/models");




const mysql =
    import ('mysql2');

// usando a constante.listem para definir a porta 3000 como aberta, abrindo uma arow function para exibir a pensagem que o servidor está ok

app.listen(process.env.port || 3000, (req, res) => {
    console.log("Server rodando facil...port 3000");
});


//incluir as controllers
const users =
    import ("./controllers/users");

//iniciar a rota

app.use("/", users);


// criando conexão com a base de dados, inderindo o local-tipo de usuario - password e o nome da tabela
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'TopIndicators',
});
module.exports


//craindo a função de conexão após parametros de connection, usando o query para realizar uma query dentro da base de dados
//usando o (err, result) para trazer o erro ou resultado obtigdo da query, e console log com o resultado...

connection.connect(function(err) {

    connection.query(
        'select nome from usuario where id = 3;',
        function(err, result) {
            console.log("Resultado: ", result);
            //console.log(fields);
        }
    )
});