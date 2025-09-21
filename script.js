let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");
let celsiusInput = document.getElementById("celsius");

document.getElementById("button").onclick = function () {
  let celsiusValue = parseFloat(celsiusInput.value);
  let numKelvin = celsiusValue + 273.15;
  let numFahrenheit = celsiusValue * 1.8 + 32;
  kelvin.textContent = `Kelvin: ${numKelvin}`;
  fahrenheit.textContent = `Fahrenheit: ${numFahrenheit}`;
};
