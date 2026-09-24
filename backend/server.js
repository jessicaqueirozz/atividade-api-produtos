const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "Periféricos"
    },
    {
        nome: "Notebook",
        preco: 2500,
        categoria: "Eletrônicos"
    },
    {
        nome: "Teclado Mecânico",
        preco: 350,
        categoria: "Periféricos"
    },
    {
        nome: "Fone Bluetooth",
        preco: 200,
        categoria: "Áudio"
    },
    {
        nome: "Monitor",
        preco: 1200,
        categoria: "Eletrônicos"
    },
    {
        nome: "Smartphone",
        preco: 1800,
        categoria: "Celulares"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
