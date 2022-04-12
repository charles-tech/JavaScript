 function calcular(){
  var peso = window.document.getElementById('txtpeso');
  var altura = window.document.getElementById('txtaltura');
  var idade = window.document.getElementById('txtidade');

  var res = window.document.querySelector('div#res');
  var respImc = window.document.querySelector('div#imc');
  var imc = 0;

  

  if(peso.value == '' || altura.value == '' || idade.value == ''){
    window.alert('Verifique os dados  e tente novamente.')
  }else{
    var fsex =document.getElementsByName('radsex');
    var fexe = document.getElementsByName('radexe');
    var genero = '';
    var img = window.document.getElementById('imagem');

    if(fsex[0].checked){
      genero = 'homem';
      if(fexe[0].checked){
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2); 
        
      }else if(fexe[1].checked){
        genero = 'homem';
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        basal += 400;
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2); 
        

      }else if(fexe[2].checked){
        genero = 'homem';
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        basal += 800;
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2); 

      }

    }else if(fsex[1].checked){
      genero ='Mulher';
      if(fexe[0].checked){
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2); 
      }else if(fexe[1].checked){
        genero = 'Mulher';
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        basal += 400;
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2); 

      }else if(fexe[2].checked){
        genero = 'Mulher';
        basal = 66+(13.7*peso.value)+(5*altura.value)-(6.8*idade.value);
        basal += 800;
        alt = altura.value * altura.value;
        calc= peso.value/(altura.value*altura.value);
        imc = calc.toFixed(2);    }

  }
 
  res.innerHTML = `Detectamos ${genero} com ${basal} Calorias Diaria.`
  
   if(genero = 'homem' && imc <=25){
    respImc.innerHTML = `Seu IMC ${imc}. Parabêns, Você esta saldável. `
    img.src = 'hsarado.jpg'

   }else if(genero = 'homem' && imc <=30){
    respImc.innerHTML = `Seu IMC ${imc}. Você esta  a cima do peso. `
    img.src = 'hsobrepeso.jpg'

    }else{
    respImc.innerHTML = `Seu IMC ${imc}. Você esta Obeso. `
    img.src = 'hkgmortais.jpg'

  }


  if(genero = 'mulher' && imc <=25){
    respImc.innerHTML = `Seu IMC ${imc}. Parabêns, Você esta saldável. `
    img.src = 'msarada.jpg'

  }else if(genero = 'mulher' && imc <=30){
    respImc.innerHTML = `Seu IMC ${imc}. Você esta  a cima do peso. `
    img.src = 'msobrepeso.jpg'

  }else{
    respImc.innerHTML = `Seu IMC ${imc}. Você esta Obeso. `
    img.src = 'mkgmortais.jpg'

  }

  
 

 


 
 
 
   }

   
 }



