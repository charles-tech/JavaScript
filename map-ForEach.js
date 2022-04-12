
let usuarios = new Map([
  ["01","Mouse"],
  ["02","Teclado"],
  ["03","Monitor"],
  ["04","Gabinete"]

]);
usuarios.set("05",["Memória"]);
console.log(usuarios.has("07") ? "Produto Encontrado" : "Não esta na Lista");


function info(chave,valor){
  console.log("Chave: "+ chave + " - Valor " + valor);
}
usuarios.forEach(info);






