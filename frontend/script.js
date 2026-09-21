async function carregarDados() {
    const url = "https://studious-engine-vppjqxv97wr53wr6w-3000.app.github.dev/";

    const resposta = await fetch(url);

    const produto = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = `
        <div class="card">
            <h2>${produto.nome}</h2>
            <p>Categoria: ${produto.categoria}</p>
            <p class="preco">Preço: R$ ${produto.preco}</p>
        </div>
    `;
}

carregarDados();
