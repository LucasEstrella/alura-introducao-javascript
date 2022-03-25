var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso); // true ou false
    var alturaValida = validaAltura(altura); // true ou false


    if (!validaPeso) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!validaAltura) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");

    }
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >=0 && peso <= 500){
        return true;
    }else
    return false;
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else
        return false;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //toFixed() limitar o número de casas decimais
}



//console.log(paciente) // tr
//console.log(tdPeso) // td que tem o peso
//console.log(peso) // somente o conteúdo de td .info-peso (100)
//console.log(altura) // somente o conteúdo de td .info-altura (2.0)
//console.log(imc) // resultado do calculo