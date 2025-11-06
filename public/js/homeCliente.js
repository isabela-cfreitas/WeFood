"use strict";

const estabelecimentos = [
  new Estabelecimento("João Grillo", "1111-1111", "jg@gmail.com", "123", "00.000.000/0001-00", "Rua A, 123", "imagens/estabelecimentos/joaogrilo.jpg", "0.5 km", 5.0, "R$ 6,00"),
  new Estabelecimento("Pedrão Coxinhas", "2222-2222", "pedrao@gmail.com", "123", "00.000.000/0002-00", "Rua B, 321", "imagens/estabelecimentos/pedraocoxinhas.jpg", "1.2 km", 5.0, "Grátis"),
  new Estabelecimento("Spoleto", "3333-3333", "spoleto@gmail.com", "123", "00.000.000/0003-00", "Av. C, 10", "imagens/estabelecimentos/sopleto.png", "2.5 km", 4.8, "R$ 8,00"),
  new Estabelecimento("Mosaico Sorveteria", "4444-4444", "mosaico@gmail.com", "123", "00.000.000/0004-00", "Av. D, 15", "imagens/estabelecimentos/mosaico.jpg", "0.8 km", 5.0, "Grátis"),
  new Estabelecimento("Lanchonete DCE", "5555-5555", "dce@gmail.com", "123", "00.000.000/0005-00", "Campus UFV", "imagens/estabelecimentos/dce.jpg", "2.2 km", 4.0, "R$ 6,00"),
  new Estabelecimento("Boca Viçosa", "6666-6666", "bocavicosa@gmail.com", "123", "00.000.000/0006-00", "Centro, Viçosa", "imagens/estabelecimentos/bocavicosa.jpg", "0.9 km", 4.6, "R$ 8,00")
];

function renderizarEstabelecimentos () {
    const container = document.getElementById("listaRestaurantes");
    container.innerHTML = "";

    estabelecimentos.forEach (est => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${est._imagem}" alt="${est._nome}"></img>
        <h4>${est._nome}</h4>
        <p>${est._distancia} • ⭐ ${est._avaliacao} • ${est._frete}</p>`;
        
        card.addEventListener("click", () => {
            window.location.href = `cardapio.html?nome=${encodeURIComponent(est._nome)}`;
        });

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderizarEstabelecimentos);

