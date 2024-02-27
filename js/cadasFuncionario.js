document.addEventListener("DOMContentLoaded", function () {//adicionar
    const nomeInput = document.getElementById("nomeInput");
    const cargoInput = document.getElementById("cargoInput");
    const idadeInput = document.getElementById("idadeInput");
    const cpfInput = document.getElementById("cpfInput");

    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("tabList");



    addTask.addEventListener("click", function () {//adicionar idade
        if (nomeInput.value.trim() !== "") {//cargo
            const currentTask = document.createElement("tr");
            currentTask.innerHTML = `<td>${nomeInput.value.trim()}</td> <td><button class="deleteButton">deletar</button></td>`;

            
            taskList.appendChild(currentTask);//adiciona
            

            const removeAlltask = document.getElementsByClassName("deleteButton");
            removeAlltask.addEventListener("click", function () {//DELETAR TUDO
                taskList.removeChild(currentTask);
              });
        } else {
            alert("preencha o requisitos");
        }
    });

    addTask.addEventListener("click", function () {//adicionar idade
        if (cargoInput.value.trim() !== "") {//cargo
            const currentTask = document.createElement("tr");
            currentTask.innerHTML = `<td>${nomeInput.value.trim()}</td> <td><button class="deleteButton">deletar</button></td>`;

            
            taskList.appendChild(currentTask);//adiciona
            

            const removeAlltask = document.getElementsByClassName("deleteButton");
            removeAlltask.addEventListener("click", function () {//DELETAR TUDO
                taskList.removeChild(currentTask);
              });
        } else {
            alert("preencha o requisitos");
        }
    });



});