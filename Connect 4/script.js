var game_active = false; // Is the game running
var active_player = 1; // Indicating who's turn is it
var gameboard = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]; // Initialize the board
var turn = 1; // Check number of turns to see if there's a draw
var game_info = document.getElementById("game_info"); // Just in order not to write the getElement everytime
      
window.addEventListener("load", begin_game); // Builds the board and info, and starts the game. Fired when the whole page has loaded, including all dependent resources such as stylesheets images
document.getElementById("reset_game").addEventListener("click", function(){ window.location.reload(); }); // Reloads the page

function begin_game() {
  game_active = true;
	set_up_info(); // Showing who's turn is it
}
    
/* Showing who's turn is it */
function set_up_info() {
  if(active_player==1){
     game_info.innerHTML = "Current Player: Player" + active_player + ", Red";
  }
  else{
    game_info.innerHTML = "Current Player: Player" + active_player + ", Yellow";
  }
}
		
/* Seacring the lowest slot in the current column */
function drop(col) {
  /* If game isn't active, don't do anything */
  if(game_active) { 
    for (let row=5; row>=0; row--) { // Top row is 0, so we start with 5
      if (gameboard[row][col] == 0) {
        /* Set empty cell to the active player's number */
        gameboard[row][col] = active_player;
        document.getElementById("cell_"+row+"_"+col).firstChild.classList.toggle("player"+active_player); // Change piece color from player0 to active_player
        if(check_for_win()) // See if active player has won, if so, stop function
          return true; 
        if(turn==42){ // See if the board is full, if so, update game_info and game_active and stop function
          game_info.innerHTML = "Game over, it's a draw";
          game_active=false;
          return true;
        }
        turn++;
        active_player = (active_player == 1) ? 2 : 1; // Change active player
        set_up_info(); // Show who will be the next active player
        return true; // Found empty row, return
      }
    }
  }
}	

function check_for_win() {
  /* Checking 4 in a row horizontally. 4 in a row means, if we start from the left size, column starts at 0 to 3 */
  for (let col = 0; col <=3; col++) {
    for (let row = 0; row <=5; row++) {
      if (gameboard[row][col] == active_player) { // Check current piece, if it belongs to the active player, check 4 in a row
        if ((gameboard[row][col+1] == active_player) && (gameboard[row][col+2] == active_player) && (gameboard[row][col+3] == active_player)) {
          end_game(active_player);
          return true; // Game over, can stop checking
        }
      }
    }
  }
  
  /* Checking 4 in a row vertically from top to bottom, only going over the top 3 rows*/
  for (let col = 0; col <=6; col++) {
    for (let row = 0; row <=2; row++) {
      if (gameboard[row][col] == active_player) { 
        if ((gameboard[row+1][col] == active_player) && (gameboard[row+2][col] == active_player) && (gameboard[row+3][col] == active_player)) {
          end_game(active_player); 
          return true; // Game over, can stop checking
        }
      }
    }
  }
  
  /* Checking 4 in a row diagonally, from the top left to the bottom right
  Because we move 3 columns and 3 rows, and start from the top left, column starts at 0 to 3, and row at 0 to 2(again, 0 is the top row) */
  for (let col = 0; col <=3; col++) {
    for (let row = 0; row <=2; row++) {
      if (gameboard[row][col] == active_player) { 
        if ((gameboard[row+1][col+1] == active_player) && (gameboard[row+2][col+2] == active_player) && (gameboard[row+3][col+3] == active_player)) {
          end_game(active_player);
          return true; // Game over, can stop checking
        }
      }
    }
  }
         
  /* Checking 4 in a row diagonally, from the bottom left to the top right
  Because we move 3 columns and 3 rows, and start from the bottom left, column starts at 0 to 3, and row at 3 to 5(5 is the lowest row) */
  for (let col = 0; col <=3; col++) {
    for (let row = 3; row <=5; row++) {
      if (gameboard[row][col] == active_player) { // Check current piece, if it belongs to the active player, check 4 in a row
        if ((gameboard[row-1][col+1] == active_player) && (gameboard[row-2][col+2] == active_player) && (gameboard[row-3][col+3] == active_player)) {
          end_game(active_player);
          return true; // Game over, can stop checking
        }
      }
    }
  }
}

function end_game(active_player) {
  game_active = false; // Setting to false means the drop function does nothing from now on, until we reset
  /* Show who won */
  if(active_player==1){
    game_info.innerHTML = "Winner! Player" + active_player + ", Red!"; 
  }
  else{
    game_info.innerHTML = "Winner! Player" + active_player + ", Yellow!"; 
  }
}


