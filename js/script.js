function getMoveName(argMoveId){
  console.log('wywołano getMoveName')
  console.log('argMoveId to numer:', argMoveId);
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nozyce';
  } 
  //else
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój (czyli Komputera) ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

console.log('gracza getMoveName to: ' + playerInput);

printMessage('Twój (Gracza) ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
  console.log('wywołano displayResult')
  console.log('moves:', argComputerMove, argPlayerMove);

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz');
  } if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
  } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis');
  } else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
    printMessage('Remis');
  } if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz');
  } else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz');
  } else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
    printMessage('Przegrywasz'); 
  } if(argPlayerMove == 'nieznany ruch'){
    printMessage('Gra wstrzymana');
  } 
}

displayResult(argComputerMove, argPlayerMove);
console.log('co się stało:', argComputerMove, argPlayerMove) 

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';  
} else if (randomNumber == 3){
  computerMove = 'nozyce';  
}*/

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';  
} else if (playerInput == '3'){
  playerMove = 'nozyce';  
}*/