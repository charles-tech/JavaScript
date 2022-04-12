
let usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Charles', 'Admin');
usuarios.set('Rafaela', 'User');
usuarios.set('Laura', 'Admin');

// usuarios.clear();
usuarios.delete("Luiz");
console.log("Tamanho do Map "+ usuarios.size);


for(u of usuarios)

console.log(u);



