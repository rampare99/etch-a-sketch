const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("square");

const createSquares = (numberOfSquares) => {
  container.appendChild(square);
  for (let i = 1; i < numberOfSquares * numberOfSquares; i++) {
    const squareDup = square.cloneNode(true);
    container.appendChild(squareDup);
  }
};

createSquares(16);

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  const newNumberOfSquares = prompt("Please choose the number of squares");
  if (newNumberOfSquares) {
      if (newNumberOfSquares > 100 || newNumberOfSquares < 1) {
          alert('Please choose a number between 1 and 100.');
          return;
      }
    container.innerHTML = "";
    createSquares(newNumberOfSquares);
    document.documentElement.style.setProperty(
      "--squareNum",
      newNumberOfSquares
    );
  }
});
