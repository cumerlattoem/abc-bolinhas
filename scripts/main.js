const jogadores = [
    {
        nome: "Emanuel Aguiar",
        numero: 1,
        pasta: "aluno_EMANUEL AGUIAR"
    },
    {
        nome: "Emanuel Cumerlatto",
        numero: 2,
        pasta: "aluno_EMANUEL CUMERLATTO"
    },
    {
         nome: "João Gabriel Canonica",
         numero: 3,
         pasta: "aluno_JOAO GABRIEL CANONICA"
    },
    {
        nome: "João Henrique",
        numero: 4,
        pasta: "aluno_JOAO HENRIQUE"
    },
    {
        nome: "João Otávio",
        numero: 5,
        pasta: "aluno_JOAO OTAVIO PEREIRA"
    },
    {
        nome: "Juan Gabriel",
        numero: 6,
        pasta: "aluno_JUAN GABRIEL"
    },
    {
        nome: "Lucas Varela",
        numero: 7,
        pasta: "aluno_LUCAS VARELA"
    },
    {
        nome: "Marco Antonio",
        numero: 8,
        pasta: "aluno_MARCO ANTONIO"
    },
    {
        nome: "Matheus Germano",
        numero: 9,
        pasta: "aluno_MATHEUS GERMANO"
    },
    {
        nome: "Rafael Chaves",
        numero: 10,
        pasta: "aluno_RAFAEL CHAVES"
    }
];

const escalação = document.getElementById("escalação");

const linhas = [
    jogadores.slice(0, 1),
    jogadores.slice(1, 4),
    jogadores.slice(4, 7),
    jogadores.slice(7, 10)
];

linhas.forEach(function(linha) {

    const divLinha = document.createElement("div");
    divLinha.classList.add("linha-jogadores");

    linha.forEach(function(jogador) {

        const link = document.createElement("a");

        link.classList.add("jogador");

        link.href = "perfis/" + jogador.pasta + "/perfil.html";

        link.innerHTML = `
            <div class="camisa">${jogador.numero}</div>
            <span class="nome-jogador">${jogador.nome}</span>
        `;

        divLinha.appendChild(link);

    });

    escalação.appendChild(divLinha);

});