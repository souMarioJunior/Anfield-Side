var iniciar = document.querySelector("btn_jogar");

function jogar() {
  var infos = document.querySelector(".box_infos");
  var jogo = document.querySelector(".box_jogo");

  infos.style.display = "none";
  jogo.style.display = "flex";
}

var perguntas = [
  {
    pergunta: "Pergunta aqui",
    respostas: [
      { resposta: "Resposta 01", correcao: false },
      { resposta: "Resposta 02", correcao: true },
      { resposta: "Resposta 03", correcao: false },
      { resposta: "Resposta 04", correcao: false },
    ]
  },
];
