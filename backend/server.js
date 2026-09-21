const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "Periféricos"

    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
