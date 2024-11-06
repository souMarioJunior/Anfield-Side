var guardar_nome = "";
var guardar_email = "";
var guardar_senha = "";
var guardar_senha = "";
var guardar_repetir_senha = "";

function validarCadastro() {
//   var nomeCompleto = document.getElementById("ipt_cad_nome").value;
//   var email = document.getElementById("ipt_cad_email").value;
//   var senha = document.getElementById("ipt_cad_senha").value;
//   var repetirSenha = document.getElementById("ipt_cad_repetir_senha").value;
//   console.log(nomeCompleto, email, senha, repetirSenha);

var modal = document.querySelector(".modal");

modal.style.display = "flex";
}

function mostrarErrosCadastro() {
  var nomeCompleto = document.getElementById("ipt_cad_nome").value;
  var email = document.getElementById("ipt_cad_email").value;
  var senha = document.getElementById("ipt_cad_senha").value;
  var repetirSenha = document.getElementById("ipt_cad_repetir_senha").value;

  // Validação nome
  if (nomeCompleto.length < 3) {
    document.getElementById("ipt_cad_nome").style.color = "#dc2626";
    document.getElementById("campo_nome").style.border = "solid #dc2626 thin";
    document.getElementById("campo_nome").style.borderRadius = "4px";
    document.getElementById("erro_nome").style.display = "block";
  } else {
    document.getElementById("campo_nome").style.border = "none";
    document.getElementById("ipt_cad_nome").style.color = "#d9d9d9";
    document.getElementById("campo_nome").style.borderRadius = "none";
    document.getElementById("erro_nome").style.display = "none";
  }
}

function mostrarErrosCadastroEmail() {
  var email = document.getElementById("ipt_cad_email").value;

  // Validação email
  if (
    (!email.includes(".com") && !email.includes(".com.br")) ||
    email.length < 7 ||
    !email.includes("@")
  ) {
    document.getElementById("ipt_cad_email").style.color = "#dc2626";
    document.getElementById("campo_email").style.border = "solid #dc2626 thin";
    document.getElementById("campo_email").style.borderRadius = "4px";
    document.getElementById("erro_email").style.display = "block";
  } else {
    document.getElementById("campo_email").style.border = "none";
    document.getElementById("ipt_cad_email").style.color = "#d9d9d9";
    document.getElementById("campo_email").style.borderRadius = "none";
    document.getElementById("erro_email").style.display = "none";
  }
}

function mostrarErrosCadastroSenha() {
  var senha = document.getElementById("ipt_cad_senha").value;

  // Validação de senha
  if (senha.length < 8) {
    document.getElementById("ipt_cad_senha").style.color = "#dc2626";
    document.getElementById("campo_senha").style.border = "solid #dc2626 thin";
    document.getElementById("campo_senha").style.borderRadius = "4px";
    document.getElementById("erro_senha").style.display = "block";

    console.log(senha < 8);
  } else {
    document.getElementById("campo_senha").style.border = "none";
    document.getElementById("ipt_cad_senha").style.color = "#d9d9d9";
    document.getElementById("campo_senha").style.borderRadius = "none";
    document.getElementById("erro_senha").style.display = "none";
  }
}

function mostrarErrosConfirmarSenha() {
  var senha = document.getElementById("ipt_cad_senha").value;
  var repetirSenha = document.getElementById("ipt_cad_repetir_senha").value;

    // Validação de senhas iguais
    if(repetirSenha != senha) {
    document.getElementById("ipt_cad_repetir_senha").style.color = "#dc2626";
    document.getElementById("campo_repetir_senha").style.border = "solid #dc2626 thin";
    document.getElementById("campo_repetir_senha").style.borderRadius = "4px";
    document.getElementById("erro_repetir_senha").style.display = "block";

    console.log(senha < 8);
  } else {
    document.getElementById("campo_repetir_senha").style.border = "none";
    document.getElementById("ipt_cad_repetir_senha").style.color = "#d9d9d9";
    document.getElementById("campo_repetir_senha").style.borderRadius = "none";
    document.getElementById("erro_repetir_senha").style.display = "none";
  }
    
}