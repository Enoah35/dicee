// Generate the random numbers for each player.
var player1 =  Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

// Set the images of the dices for each player.
setCards(player1, 1);
setCards(player2, 2);

// Check who has won.
if (player1 === player2){
  document.querySelector("h1").textContent ="Draw!";
} else if (player1 > player2){
  document.querySelector("h1").textContent = "Player1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player2 Wins!";
}







function setCards (diceHand, player) {
  if (player === 1){
    switch(diceHand){
      case 1:
        document.querySelector(".img1").setAttribute("src", "img/dice1.png");
        break;
      case 2:
        document.querySelector(".img1").setAttribute("src", "img/dice2.png");
        break;
      case 3:
        document.querySelector(".img1").setAttribute("src", "img/dice3.png");
        break;
      case 4:
        document.querySelector(".img1").setAttribute("src", "img/dice4.png");
        break;
      case 5:
        document.querySelector(".img1").setAttribute("src", "img/dice5.png");
        break;
      case 6:
        document.querySelector(".img1").setAttribute("src", "img/dice6.png");
        break;
    }
  } else {
        switch(diceHand){
      case 1:
        document.querySelector(".img2").setAttribute("src", "img/dice1.png");
        break;
      case 2:
        document.querySelector(".img2").setAttribute("src", "img/dice2.png");
        break;
      case 3:
        document.querySelector(".img2").setAttribute("src", "img/dice3.png");
        break;
      case 4:
        document.querySelector(".img2").setAttribute("src", "img/dice4.png");
        break;
      case 5:
        document.querySelector(".img2").setAttribute("src", "img/dice5.png");
        break;
      case 6:
        document.querySelector(".img2").setAttribute("src", "img/dice6.png");
        break;
    }
  }

  
}
