var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes!!!")

    var xhr = new XMLHttpRequest(); //Responsavel por fazer a requisição HTTP

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //abre a conexão com o endereço externo

    xhr.addEventListener("load", function(){ //escuta evento carregado e exibe oq foi solicitado
        var erroAjax = document.querySelector("#erro-ajax");    
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; //retorno da resposta            
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente);
            });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send(); //Envia a requisição

});