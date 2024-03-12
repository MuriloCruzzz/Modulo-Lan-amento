const express = require("express"); // incluir a dependencia express em uma constante  usando o require 
const router = express.Router();
module.export = { connection }

router.post("/users", async(req, res) => {

    try {
        connection.connect(function(err) {

            connection.query(
                'select nome from usuario where id = 3;',
                function(err, result) {
                    console.log("Resultado: ", result);
                    //console.log(fields);
                }
            )
        });
        return res.json({
            mensagem: "Usuario cadastrado com sucesso!"
        });


    } catch {
        console.log("Resultado nok");
        return res.json({
            mensagem: "Usuario Não cadastrado!"
        });
    }

});
// exportar controllers

module.exports = router;