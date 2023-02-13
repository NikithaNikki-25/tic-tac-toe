function startgame(){
    const cells = document.querySelectorAll(".cell");
  let playerTurn = "X";
  let gameOver = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
  }
 
  function cellClicked(e) {
    if (e.target.innerHTML !== "" || gameOver) return;
    e.target.innerHTML = playerTurn;
    checkWin();
    switchTurn();
  }

  function switchTurn() {
    playerTurn = playerTurn === "X" ? "O" : "X";
    document.querySelector("#turn").innerHTML = `Player ${playerTurn}'s turn`;
  }

  function checkWin() {
    let winner = null;
    if (
      cells[0].innerHTML === playerTurn &&
      cells[1].innerHTML === playerTurn &&
      cells[2].innerHTML === playerTurn
    ) {
      winner = playerTurn;
    } else if (
      cells[3].innerHTML === playerTurn &&
      cells[4].innerHTML === playerTurn &&
      cells[5].innerHTML === playerTurn
    ) {
      winner = playerTurn;
      
    } else if (
      cells[6].innerHTML === playerTurn &&
      cells[7].innerHTML === playerTurn &&
      cells[8].innerHTML === playerTurn
    ) {
      winner = playerTurn;
    } else if (
      cells[0].innerHTML === playerTurn &&
      cells[3].innerHTML === playerTurn &&
      cells[6].innerHTML === playerTurn
    ) {
      winner = playerTurn;
    } else if (
      cells[1].innerHTML === playerTurn &&
      cells[4].innerHTML === playerTurn &&
      cells[7].innerHTML === playerTurn
    ) {
     

   }
   
} 
} 
restart.addEventListener("click",function restartgame(){
    const cells = document.querySelectorAll(".cell");
   for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML=" "
  }
  startgame()
})
startgame()
