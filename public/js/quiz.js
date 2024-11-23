const btns = document.querySelector(".btns_game");

function jogar() {
  var infos = document.querySelector(".box_infos");
  var jogo = document.querySelector(".box_jogo");

  infos.style.display = "none";
  jogo.style.display = "flex";
  proximaPergunta();
}

var perguntas = [
  {
    "pergunta": "Qual é o estádio do Liverpool FC?",
    "respostas": [
        { "resposta": "Old Trafford", "correcao": false },
        { "resposta": "Anfield", "correcao": true },
        { "resposta": "Stamford Bridge", "correcao": false },
        { "resposta": "Etihad Stadium", "correcao": false }
    ]
},

{
  "pergunta": "Quantas vezes o Liverpool venceu a Liga dos Campeões da UEFA?",
  "respostas": [
      { "resposta": "3", "correcao": false },
      { "resposta": "6", "correcao": true },
      { "resposta": "5", "correcao": false },
      { "resposta": "7", "correcao": false }
  ]
},

{
  "pergunta": "Quem é o maior artilheiro da história do Liverpool FC?",
  "respostas": [
      { "resposta": "Kenny Dalglish", "correcao": false },
      { "resposta": "Steven Gerrard", "correcao": false },
      { "resposta": "Ian Rush", "correcao": true },
      { "resposta": "Robbie Fowler", "correcao": false }
  ]
},

{
  "pergunta": "Quem é o atual treinador do Liverpool FC?",
  "respostas": [
      { "resposta": "Pep Guardiola", "correcao": false },
      { "resposta": "Jurgen Klopp", "correcao": true },
      { "resposta": "Jose Mourinho", "correcao": false },
      { "resposta": "Carlo Ancelotti", "correcao": false }
  ]
},

{
  "pergunta": "Em que ano o Liverpool foi fundado?",
  "respostas": [
      { "resposta": "1888", "correcao": false },
      { "resposta": "1892", "correcao": true },
      { "resposta": "1902", "correcao": false },
      { "resposta": "1910", "correcao": false }
  ]
}
];

function proximaPergunta() {
  for(var contador = 0; contador < btns.childNodes.length; contador++) {
    if(btns.childNodes[contador].tagName == "BUTTON") {
      btns.removeChild(btns.childNodes[contador])
    }
    break
    // btns.removeChild(firstChild)
  }
}