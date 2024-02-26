function logar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == "chefe" && senha == "1234") {
        alert('login feito com sucesso');
        location.href = "./pages/inicial.html";
    } else {
        alert('informaçoes incorretas');
    }
}