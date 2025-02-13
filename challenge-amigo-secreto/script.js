//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Inválido! Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona ao array
    input.value = ""; // Limpa o campo de entrada

    exibirAmigos(); 
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 

    document.getElementById("resultadoSorteio").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}