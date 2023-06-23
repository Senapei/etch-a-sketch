const container = document.getElementById("grid-container");

//function that will create a grid of squares that will change colour when hovered
//parameter will take a number which will be used to decide size of the grid
function createGrid(size) {
  //gets the containers width (only the number - not the "px")
  const containerWidth =
    parseFloat(window.getComputedStyle(container).width) / size;

  //loops through each row
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    //loops through the row
    for (let j = 0; j < size; j++) {
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

//creates initial grid with default size of 16
createGrid(16);

const sizeBtn = document.getElementsByClassName("size-btn")[0];
//creates event handler on button to create grid of any size
sizeBtn.addEventListener("click", () => {
  //removes the current grid
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  //creates the grid of any size using the prompt
  createGrid(prompt("What size would you like the grid to be? (24 = 24x24)"));
});
