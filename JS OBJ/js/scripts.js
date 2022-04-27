class Produto{
  constructor(){
    this.id = 1;
    this.arrayProdutos =[];

   

  }
  salvar(){
    
    let produto = this.lerDados();
    // this.validaCampos(produto);
    if(this.validaCampos(produto)){
     this.adicionar(produto);
    }

    this.listaTabela();
    this.cancelar();
  }

  listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i =0;i< this.arrayProdutos.length;i++){
      let tr = tbody.insertRow();
      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText =  this.arrayProdutos[i].id;
      td_produto.innerText =  this.arrayProdutos[i].nomeProduto;
      td_valor.innerText =  this.arrayProdutos[i].preco;
    

      td_id.classList.add('center');
      let imgEdit = document.createElement('img');
      imgEdit.scr = 'img/edit.png';

      td_acoes.appendChild(imgEdit);




    }
  }

  adicionar(produto){
    this.arrayProdutos.push(produto);
    this.id++;

  }
  
  lerDados(){
    let produto= {}
    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;
    produto.preco = document.getElementById('preco').value;

    return produto;


  }

  validaCampos(produto){
    let msg= '';

    if(produto.preco == ''){
      msg += '- Informe o Preço do Produto \n';
    }

   

    if(produto.nomeProduto == ''){
      msg +=  '- Informe o Nome do Produto \n';
    }
    if(msg!=''){
      alert(msg);
      return false
    }
    return true;

  }
  cancelar(){
    document.getElementById('produto').value = '';
    document.getElementById('preco').value = '';
  }

  
}

var produto = new Produto();

