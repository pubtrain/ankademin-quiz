let darkButton = document.querySelector("#darkMode");

darkButton.addEventListener("click", () => {
  let toggleDark = document.body;
  toggleDark.classList.toggle("dark-mode");
})

let restartButton = document.querySelector("#restart")

restartButton.addEventListener("click", () => {
  let restartGame = location.reload();
})