const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const calculate = document.querySelector("button.calculate");
const res = document.querySelector("#res");

calculate.addEventListener("click", () => {
  const value1 = firstNumber.value;
  const value2 = secondNumber.value;
  const sum = value1 + value2;
  res.innerHTML = sum;
});
