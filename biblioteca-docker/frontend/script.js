const API = "http://localhost:3001";


async function carregarLivros() {

    const resposta = await fetch(`${API}/livros`);

    const livros = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    livros.forEach(livro => {

        lista.innerHTML += `
            <div class="livro">
                <strong>${livro.titulo}</strong> — ${livro.autor} (${livro.ano})
            </div>
        `;

    });
}


async function salvarLivro() {

    const campoTitulo = document.getElementById("titulo");
    const campoAutor = document.getElementById("autor");
    const campoAno = document.getElementById("ano");

    const titulo = campoTitulo.value;
    const autor = campoAutor.value;
    const ano = campoAno.value;

    if (titulo === "" || autor === "") {
        return;
    }

    await fetch(`${API}/livros`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            titulo: titulo,
            autor: autor,
            ano: ano
        })

    });

    campoTitulo.value = "";
    campoAutor.value = "";
    campoAno.value = "";

    carregarLivros();
}


carregarLivros();
