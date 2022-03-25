var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //parentNode, leva ao pai de quem foi clicado
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function (){

        event.target.parentNode.remove();
    }, 500);
   
    /*  var alvoDoClick = event.target; //Descobre quem foi clicado
    var paiDeQuemFoiClicado = alvoDoClick.parentNode; //TR = paciente = remove
    paiDeQuemFoiClicado.remove(); //remove o pai do alvoDoClick */ 
});
