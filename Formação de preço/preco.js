var imposto = 1.12;
document.getElementById("valor-calculado").style.display = "none";



function calcularPreco(){
  let nomePeca = document.getElementById("nome-produto").value;
  let valorinjetora = document.getElementById("valor-injetora").value;
  let ciclo = document.getElementById("ciclo").value;
  let cavidade = document.getElementById("cavidade").value;
  let nomeMp = document.getElementById("nome-materiaprima").value;
  let custoMp = document.getElementById("valor-materiaprima").value;
  let pesoPeca = document.getElementById("peso-peca").value;
  let embalagen = document.getElementById("embalagen").value;
  let valorEmbalagen = document.getElementById("valor-embalagen").value;
  let quantPecaEmbalagens = document.getElementById("quantPecaEmbalagens").value;
  let opcaoMp= document.getElementsByName('opcao');


     

     

let producaoHora = ((3600/ciclo)*cavidade);
let valorIndustrializacao = valorinjetora/producaoHora;
let custoPecaMp  = (custoMp/(1/pesoPeca));
let custoPecaEmb = (valorEmbalagen/quantPecaEmbalagens);
let valorPeca = ((valorIndustrializacao+custoPecaEmb+custoPecaMp)*imposto);





valorPeca = valorPeca.toFixed(2);

  document.getElementById("valor-calculado").style.display ="block";

  document.getElementById("valor-por-cabeca").innerHTML= valorPeca; 
  document.getElementById("nomePeca").innerHTML=nomePeca;
    









}


