document.addEventListener("DOMContentLoaded", function() {
    var btnCadastrar = document.getElementById("btnCadastrar");
    var formulario = document.getElementById("formFuncionarios");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var cargo = document.getElementById("cargo").value;
        var salario = document.getElementById("salario").value;

        alert(
            "Funcionário cadastrado!\n" +
            "Nome: " + nome + "\n" +
            "Cargo: " + cargo + "\n" +
            "Salário: R$ " + salario
        );

        formulario.reset();
    });
});