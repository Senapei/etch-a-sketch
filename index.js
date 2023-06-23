const container = document.getElementById("grid-container");

//gets the containers width (only the number - not the "px")
const containerWidth =
  parseFloat(window.getComputedStyle(container).width) / 16;

//function that will create a grid of squares that will change colour when hovered
function createGrid() {
  //loops through each row
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");

    //loops through the row
    for (let j = 0; j < 16; j++) {
      //creates each square for the column
      const square = document.createElement("div");
      //adds the square class
      square.classList.add("square");
      //changes the width and height depending on the containers width that we retrieved earlier
      square.style.width = containerWidth + "px";
      square.style.height = containerWidth + "px";
      //append the square to the row
      row.appendChild(square);
      //add event listener that will add a class ("square-hover" which changes the colour) whenever the square is hovered
      square.addEventListener("mouseover", () => {
        square.classList.add("square-hover");
      });
    }
    //appends the whole row to the container
    container.appendChild(row);
  }
}

createGrid();
