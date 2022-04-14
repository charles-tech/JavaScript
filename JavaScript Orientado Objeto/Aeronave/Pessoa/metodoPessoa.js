var pessoa ={
  idade:25,
  nome: "Julio",
  sobrenome:"Moreira",
  altura: 1.85,
  casado: false,
  aniversario: function (idade){
    pessoa.idade ++;
  },
  nomeComSobrenome: function(){
    pessoa.nome = pessoa.nome + " "+ pessoa.sobrenome;
    
  }
};

pessoa.aniversario();
pessoa.nomeComSobrenome();

console.log(pessoa);

