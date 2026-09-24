const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "Periféricos",
        imagem: "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-10000dpi-7-botoes-preto-m711-v2_1742821619_gg.jpg"
    },
    {
        nome: "Notebook",
        preco: 2500,
        categoria: "Eletrônicos",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvFeBsz4Ps87GjQHjaJR3f3qYzbvwX4WVVEboKXY-rA&s=10"
    },
    {
        nome: "Teclado Mecânico",
        preco: 350,
        categoria: "Periféricos",
        imagem: "https://www.cellfy.com.br/cdn/shop/files/original_image_a53b120e-f6df-47c2-bffb-2c41b8737056.jpg?v=1776712658"
    },
    {
        nome: "Fone Bluetooth",
        preco: 200,
        categoria: "Áudio",
        imagem: "https://pegdobrasil.cdn.magazord.com.br/img/2025/12/produto/164556/112707.jpg?ims=fit-in/600x600/filters:fill(fff)"
    },
    {
        nome: "Monitor",
        preco: 1200,
        categoria: "Eletrônicos",
        imagem: "https://cdn.awsli.com.br/2500x2500/954/954868/produto/81614241/8073c11ad7.jpg"
    },
    {
        nome: "Smartphone",
        preco: 1800,
        categoria: "Celulares",
        imagem: "https://americanas.vtexassets.com/arquivos/ids/37360566-540-auto/MOTOG17256GBROXO.webp?v=639098617774300000&quality=9"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
