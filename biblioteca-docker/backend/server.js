const express = require("express");

const mysql = require("mysql2");

const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());


const banco = mysql.createPool({

    host: "banco",

    user: "root",

    password: "123456",

    database: "biblioteca"

});


app.get("/livros", (req, res) => {

    banco.query(
        "SELECT * FROM livros",
        (erro, resultados) => {

            if (erro) {

                return res.status(500).json({
                    erro: "Erro ao buscar livros"
                });

            }

            res.json(resultados);

        }
    );

});


app.post("/livros", (req, res) => {

    const { titulo, autor, ano } = req.body;


    banco.query(

        "INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)",

        [titulo, autor, ano],

        (erro) => {

            if (erro) {

                return res.status(500).json({
                    erro: "Erro ao salvar livro"
                });

            }

            res.json({
                mensagem: "Livro salvo"
            });

        }

    );

});


app.listen(3000, () => {

    console.log("Backend rodando na porta 3000");

});
