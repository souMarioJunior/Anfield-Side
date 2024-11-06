var guardar_nome = '';
var guardar_email = '';
var guardar_senha = '';
var guardar_senha = '';
var guardar_repetir_senha = '';

function validarCadastro() {
    var nomeCompleto = document.getElementById('ipt_cad_nome').value;
    var email = document.getElementById('ipt_cad_email').value;
    var senha = document.getElementById('ipt_cad_senha').value;
    var repetirSenha = document.getElementById('ipt_cad_repetir_senha').value;
    console.log(nomeCompleto, email, senha, repetirSenha)
}

function mostrarErrosCadastro() {
    var nomeCompleto = document.getElementById('ipt_cad_nome').value;
    var email = document.getElementById('ipt_cad_email').value;
    var senha = document.getElementById('ipt_cad_senha').value;
    var repetirSenha = document.getElementById('ipt_cad_repetir_senha').value;


    // Validação nome
    if(nomeCompleto.length < 3) {
        document.getElementById('ipt_cad_nome').style.color = '#dc2626';
        document.getElementById('campo_nome').style.border = 'solid #dc2626 thin'
        document.getElementById('campo_nome').style.borderRadius = '4px'
        document.getElementById('erro_nome').style.display = 'block';
    } else {
        document.getElementById('campo_nome').style.border = 'none'
        document.getElementById('ipt_cad_nome').style.color = '#d99D9;';
        document.getElementById('campo_nome').style.borderRadius = 'none'
        document.getElementById('erro_nome').style.display = 'none';
    }
}