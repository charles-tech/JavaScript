class Spaceship {
  constructor(name, crewQuantity){
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.isHitched = false;
    this.entraceDoorsOpen = false;


  }
  hitch(){
    this.isHitched = true;
    this.entraceDoorsOpen = true;
  }
}

function showMenu(){
  let chosenOption;
  while(chosenOption !="1" && chosenOption !="2" && chosenOption !="3"){
    chosenOption = prompt("O que Deseja Fazer?\n" +
    "1- Engatar bave\n" +
    "2- Imiprimir naves\n" +
    "3- Sair do Programa");
  }
  return chosenOption;
}
function createSpaceship(){
  let spaceshipName = prompt("Informe o nome da nave ");
  let crewQuantity = prompt("Informar a quantidade de tripulantes" );
  let spaceship = new Spaceship(spaceshipName, crewQuantity);
  return spaceship;
}

function printSpaceshipList(spaceships){
  let spaceshipList = "";
  spaceships.forEach((spaceship,index)=>{
    spaceshipList += (index +1) + "-"+ spaceship.name + 
    " ("+ spaceship.crewQuantity + " tripulantes)\n";
  });
  alert(spaceshipList);
}

let hitchedSpaceships =[];
let choseOpition;
while(choseOpition != "3"){
  choseOpition = showMenu();
  switch(choseOpition){
    case "1":
      let spaceshipToAdd = createSpaceship();
      spaceshipToAdd.hitch();
      hitchedSpaceships.push(spaceshipToAdd);
      break;
      case "2":
        printSpaceshipList(hitchedSpaceships);
        break;


  }

}
