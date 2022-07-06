{
  'use strict';

  const playGame = function (playerInput) {

    console.log('wywołano playGame')

    clearMessages();
    
    console.log('wywołano clearMessages');

    const getMoveName = function (MoveId) {

      console.log('wywołano getMoveName')
      console.log('MoveId to numer:', MoveId);

      if (MoveId == 1) {
        return 'kamień';
      } else if (MoveId == 2) {
        return 'papier';
      } else if (MoveId == 3) {
        return 'nożyce';
      }
      //else
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const ComputerMove = getMoveName(randomNumber);

    printMessage('Mój (czyli Komputera) ruch to: ' + ComputerMove);

    const PlayerMove = getMoveName(playerInput);

    console.log('gracza getMoveName to: ' + playerInput);

    printMessage('Twój (Gracza) ruch to: ' + PlayerMove);

    const displayResult = function (ComputerMove, PlayerMove) {

      console.log('wywołano displayResult')
      console.log('moves:', ComputerMove, PlayerMove);

      if (ComputerMove == 'kamień' && PlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
      } else if (ComputerMove == 'papier' && PlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
      } else if (ComputerMove == 'nożyce' && PlayerMove == 'kamień') {
        printMessage('Ty wygrywasz');
      } if (ComputerMove == 'kamień' && PlayerMove == 'kamień') {
        printMessage('Remis');
      } else if (ComputerMove == 'papier' && PlayerMove == 'papier') {
        printMessage('Remis');
      } else if (ComputerMove == 'nożyce' && PlayerMove == 'nożyce') {
        printMessage('Remis');
      } if (ComputerMove == 'papier' && PlayerMove == 'kamień') {
        printMessage('Przegrywasz');
      } else if (ComputerMove == 'nożyce' && PlayerMove == 'papier') {
        printMessage('Przegrywasz');
      } else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
        printMessage('Przegrywasz');
      } if (PlayerMove == 'nieznany ruch') {
        printMessage('Gra wstrzymana');
      }
    }

    displayResult(ComputerMove, PlayerMove);
    console.log('co się stało:', ComputerMove, PlayerMove)
  }

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
  });
}