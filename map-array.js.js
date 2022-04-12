
let usuarios = new Map([
  ["01",["Mouse","R$10,75"]],
  ["02",["Teclado","R$35,90"]],
  ["03",["Monitor","R$420,55"]],
  ["04",["Gabinete","R$150,0"]]

]);


usuarios.set("05",["Memória","R$199,90"]);



usuarios.delete("Luiz");
console.log("Tamanho do Map "+ usuarios.size);


for(u of usuarios)

console.log(u[1]);



