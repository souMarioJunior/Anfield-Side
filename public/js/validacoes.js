// VALIDAÇÕES DE CADASTRO
// -----------------------------------------------------------------------------------------------------------------
var validacaoNome = false;
var validacaoEmail = false;
var validacaoEmail = false;
var validacaoSenha = false;
var validacaoRepetirSenha = false;
var validacaoSelect = false;

function mostrarErrosCadastro() {
  var nomeCompleto = document.getElementById("ipt_cad_nome").value;

  // Validação nome
  if (nomeCompleto.length < 2) {
    validacaoNome = false;
    document.getElementById("ipt_cad_nome").style.color = "#dc2626";
    document.getElementById("campo_nome").style.border = "solid #dc2626 thin";
    document.getElementById("campo_nome").style.borderRadius = "4px";
    document.getElementById("erro_nome").style.display = "block";
  } else {
    validacaoNome = true;
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
    validacaoEmail = false;
    document.getElementById("ipt_cad_email").style.color = "#dc2626";
    document.getElementById("campo_email").style.border = "solid #dc2626 thin";
    document.getElementById("campo_email").style.borderRadius = "4px";
    document.getElementById("erro_email").style.display = "block";
  } else {
    validacaoEmail = true;
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
    validacaoSenha = false;
    document.getElementById("ipt_cad_senha").style.color = "#dc2626";
    document.getElementById("campo_senha").style.border = "solid #dc2626 thin";
    document.getElementById("campo_senha").style.borderRadius = "4px";
    document.getElementById("erro_senha").style.display = "block";
    

    console.log(senha < 8);
  } else {
    validacaoSenha = true;
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
  if (repetirSenha != senha) {
    validacaoRepetirSenha = false;
    document.getElementById("ipt_cad_repetir_senha").style.color = "#dc2626";
    document.getElementById("campo_repetir_senha").style.border =
      "solid #dc2626 thin";
    document.getElementById("campo_repetir_senha").style.borderRadius = "4px";
    document.getElementById("erro_repetir_senha").style.display = "block";

    console.log(senha < 8);
  } else {
    validacaoRepetirSenha = true;
    document.getElementById("campo_repetir_senha").style.border = "none";
    document.getElementById("ipt_cad_repetir_senha").style.color = "#d9d9d9";
    document.getElementById("campo_repetir_senha").style.borderRadius = "none";
    document.getElementById("erro_repetir_senha").style.display = "none";
  }
}

function validarCadastro() {
  var nomeCompleto = document.getElementById("ipt_cad_nome").value;
  var email = document.getElementById("ipt_cad_email").value;
  var senha = document.getElementById("ipt_cad_senha").value;
  var repetirSenha = document.getElementById("ipt_cad_repetir_senha").value;
  var selectJogadores = document.getElementById("slc_jogador").value;
  var modal = document.querySelector(".modal");

  // Validação nome
  if (nomeCompleto.length < 3) {
    validacaoNome = false;
    document.getElementById("ipt_cad_nome").style.color = "#dc2626";
    document.getElementById("campo_nome").style.border = "solid #dc2626 thin";
    document.getElementById("campo_nome").style.borderRadius = "4px";
    document.getElementById("erro_nome").style.display = "block";
  } else {
    validacaoNome = true;
    document.getElementById("campo_nome").style.border = "none";
    document.getElementById("ipt_cad_nome").style.color = "#d9d9d9";
    document.getElementById("campo_nome").style.borderRadius = "none";
    document.getElementById("erro_nome").style.display = "none";
  }

  // Validação email
  if (
    (!email.includes(".com") && !email.includes(".com.br")) ||
    email.length < 7 ||
    !email.includes("@")
  ) {
    validacaoEmail = false;
    document.getElementById("ipt_cad_email").style.color = "#dc2626";
    document.getElementById("campo_email").style.border = "solid #dc2626 thin";
    document.getElementById("campo_email").style.borderRadius = "4px";
    document.getElementById("erro_email").style.display = "block";
  } else {
    validacaoEmail = true;
    document.getElementById("campo_email").style.border = "none";
    document.getElementById("ipt_cad_email").style.color = "#d9d9d9";
    document.getElementById("campo_email").style.borderRadius = "none";
    document.getElementById("erro_email").style.display = "none";
  }

  // Validação de senha
  if (senha.length < 8) {
    validacaoSenha = false;
    document.getElementById("ipt_cad_senha").style.color = "#dc2626";
    document.getElementById("campo_senha").style.border = "solid #dc2626 thin";
    document.getElementById("campo_senha").style.borderRadius = "4px";
    document.getElementById("erro_senha").style.display = "block";

    console.log(senha < 8);
  } else {
    validacaoSenha = true;
    document.getElementById("campo_senha").style.border = "none";
    document.getElementById("ipt_cad_senha").style.color = "#d9d9d9";
    document.getElementById("campo_senha").style.borderRadius = "none";
    document.getElementById("erro_senha").style.display = "none";
  }

  // Validação de senhas iguais
  if (repetirSenha != senha || repetirSenha == "") {
    validacaoRepetirSenha = false;
    document.getElementById("ipt_cad_repetir_senha").style.color = "#dc2626";
    document.getElementById("ipt_cad_repetir_senha").style.color = "#dc2626";
    document.getElementById("campo_repetir_senha").style.border =
      "solid #dc2626 thin";
    document.getElementById("campo_repetir_senha").style.borderRadius = "4px";
    document.getElementById("erro_repetir_senha").style.display = "block";

    console.log(senha < 8);
  } else {
    validacaoRepetirSenha = true;
    document.getElementById("campo_repetir_senha").style.border = "none";
    document.getElementById("ipt_cad_repetir_senha").style.color = "#d9d9d9";
    document.getElementById("campo_repetir_senha").style.borderRadius = "none";
    document.getElementById("erro_repetir_senha").style.display = "none";
  }

  // Validação select
  if (selectJogadores == "") {
    validacaoSelect = false;
    document.getElementById("campo_select").style.border = "solid #dc2626 thin";
    document.getElementById("campo_select").style.borderRadius = "4px";
    document.getElementById("erro_selecionar_jogador").style.display = "block";
  } else {
    validacaoSelect = true;
    document.getElementById("campo_select").style.border = "none";
    document.getElementById("ipt_cad_nome").style.color = "#d9d9d9";
    document.getElementById("campo_nome").style.borderRadius = "none";
    document.getElementById("erro_selecionar_jogador").style.display = "none";
  }
  if (
    validacaoNome == true &&
    validacaoEmail == true &&
    validacaoSenha == true &&
    validacaoRepetirSenha == true &&
    validacaoSelect == true
  ) {
    modal.style.display = "flex";

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeCompleto,
        emailServer: email,
        senhaServer: senha,
        jogadorServer: selectJogadores,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }

  console.log(selectJogadores);
}

// VALIDAÇÕES DE LOGIN
// -----------------------------------------------------------------------------------------------------

function validarLogin() {
  // aguardar();

  var emailVar = document.getElementById("input_email").value;
  var senhaVar = document.getElementById("input_senha").value;

  if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
      finalizarAguardar();
      return false;
  }
  
  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));
              sessionStorage.ID_USUARIO = json.idUsuario;
              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nomeCompleto;

              setTimeout(function () {
                  window.location = "./feed.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
              finalizarAguardar(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}