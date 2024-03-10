function addLinha() {
    var nome = document.getElementById("nomeInput").value.trim();
    var cargo = document.getElementById("cargoInput").value.trim();
    var idade = document.getElementById("idadeInput").value.trim();
    var cpf = document.getElementById("cpfInput").value.trim();
    var tabela = document.getElementById("tabela");

    var row = tabela.insertRow(-1);


    if (nome === "" || cargo === "" || idade === "" || cpf === "") {
        alert('preencha as informaçoes');
    } else {
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = nome;
        cell2.innerHTML = cargo;
        cell3.innerHTML = idade;
        cell4.innerHTML = cpf;
    }

    // Limpar os campos após adicionar a linha
    document.getElementById("nomeInput").value = "";
    document.getElementById("cargoInput").value = "";
    document.getElementById("idadeInput").value = "";
    document.getElementById("cpfInput").value = "";



}