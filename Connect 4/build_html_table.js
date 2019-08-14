/* Just writing it as a simple HTML, to avoid building it manually in the index file 42 times */
for (let row=0; row<=5; row++) {
    document.writeln("<tr>");	
    /* Giving a unique ID to each cell, that includes current row and column, and also adding classes for CSS */
    for (let col=0; col<=6; col++) {
      document.writeln("<td id='cell_" + row + "_"+ col +"' class='board_cell'></td>"); // Board_cell sets cell's size and background

      // This is a child of the <td>. Piece sets piece's size and shape, and player is for the color of the piece
      document.getElementById("cell_"+row+"_"+col).innerHTML +="<div class='piece player"+0+"'></div>"; 
    }
    document.writeln("</tr>");	
  }	