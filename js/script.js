function playGame (playerInput) {

console.log('wywołano playGame')  
  clearMessages();
  console.log('wywołano clearMessages');

  function getMoveName(MoveId){

  console.log('wywołano getMoveName')
  console.log('MoveId to numer:', MoveId);

    if(MoveId == 1){
    return 'kamień';
    } else if (MoveId == 2){
    return 'papier';
    } else if (MoveId == 3){
    return 'nozyce';
    } 
  //else
    printMessage('Nie znam ruchu o id ' + MoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

  printMessage('Mój (czyli Komputera) ruch to: ' + ComputerMove);

//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

//console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);

console.log('gracza getMoveName to: ' + playerInput);

  printMessage('Twój (Gracza) ruch to: ' + PlayerMove);

  function displayResult(ComputerMove, PlayerMove) {

  console.log('wywołano displayResult')
  console.log('moves:', ComputerMove, PlayerMove);

    if(ComputerMove == 'kamień' && PlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (ComputerMove == 'papier' && PlayerMove == 'nozyce'){
      printMessage('Ty wygrywasz!');
    } else if (ComputerMove == 'nozyce' && PlayerMove == 'kamień'){
      printMessage('Ty wygrywasz');
    } if(ComputerMove == 'kamień' && PlayerMove == 'kamień'){
      printMessage('Remis');
    } else if(ComputerMove == 'papier' && PlayerMove == 'papier'){
      printMessage('Remis');
    } else if(ComputerMove == 'nozyce' && PlayerMove == 'nozyce'){
      printMessage('Remis');
    } if(ComputerMove == 'papier' && PlayerMove == 'kamień'){
      printMessage('Przegrywasz');
    } else if(ComputerMove == 'nozyce' && PlayerMove == 'papier'){
      printMessage('Przegrywasz');
    } else if(ComputerMove == 'kamień' && PlayerMove == 'nozyce'){
      printMessage('Przegrywasz'); 
    } if(PlayerMove == 'nieznany ruch'){
      printMessage('Gra wstrzymana');
  } 
}

  displayResult(ComputerMove, PlayerMove);
  console.log('co się stało:', ComputerMove, PlayerMove)
}
//playGame(3);
//console.log('co się stało przy playGame?', playerInput)
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});