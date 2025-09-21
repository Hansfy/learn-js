let max = 100;
let min = 0;

document.getElementById("roller").onclick = function () {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  document.getElementById("randomNumber").innerText = randomNumber;
};
