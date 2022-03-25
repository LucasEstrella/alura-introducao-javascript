// Essa parte, adiciona o paciente ao formulário no html//
var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function (event) { // addEventListener (Ouve o que for selecionado)
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //value = recebe o valor digitado no input
    //Extraindo informações dos pacientes
    var paciente = obtemPacienteDoFormulario(form);

  

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }


    
    adicionarPacienteNaTabela(paciente);
    

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionarPacienteNaTabela(paciente){
      //Criando TR e TD dos pacientes
    var pacienteTr = montaTr(paciente);
      //Adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

}

function obtemPacienteDoFormulario(form) {
    //Objeto recebe o valor dos atributos com : e NÃO sinal de =
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr"); //criar tag <tr>

    // appendChild, coloca o elemento dentro de outro (cria tag <td>)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Nome não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco")
    }
    if(!validaAltura(paciente.altura)){
        erros.push(" Altura é inválida")
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco")
    }
    return erros;

    
}