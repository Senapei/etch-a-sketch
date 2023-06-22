const container = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    container.appendChild(newSquare);
  }
}
