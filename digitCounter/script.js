const digitCounter = document.getElementById("digitCounter");
let digitValue = 0;

function updateCounter(val) {
  digitValue = val;
  digitCounter.innerText = digitValue;
}

document.querySelector(".counter-container").onclick = (e) => {
  if (e.target.id === "decrement") updateCounter(digitValue - 1);
  if (e.target.id === "increment") updateCounter(digitValue + 1);
  if (e.target.id === "reset") updateCounter(0);
};
